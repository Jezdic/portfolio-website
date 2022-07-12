import { useState, useReducer } from "react";

import useSelectSection from "../utils/useSelectSection";
import useSectionTitle from "../utils/useSectionTitle";

import Modal from "./MessageSuccessModal";

const initialFormData = {
  fullname: "",
  email: "",
  company: "",
  message: "",
  formErrors: {
    fullname: "",
    email: "",
    message: "",
  },
};

const formReducer = (state, action) => {
  switch (action.type) {
    case "setFormField":
      return {
        ...state,
        [action.key]: action.value,
        formErrors: { ...state.formErrors, [action.key]: "" },
      };
    case "setFormError":
      return {
        ...state,
        formErrors: { ...state.formErrors, [action.key]: action.value },
      };
    case "resetForm":
      return initialFormData;
    default:
      throw new Error();
  }
};

const Contact = () => {
  const ref = useSelectSection("contact");
  const isCurrentSection = useSectionTitle("contact");
  const [showCopySuccess, setShowCopySuccess] = useState(false);

  const [sendMessageLoading, setSendMessageLoading] = useState(false);
  const [sendError, setSendError] = useState();
  const [shakeButton, setShakeButton] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const [formData, dispatch] = useReducer(formReducer, initialFormData);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("jezdicn15@gmail.com");
    setShowCopySuccess(true);

    setTimeout(() => {
      setShowCopySuccess(false);
    }, 1000);
  };

  const validateFormFields = () => {
    let validationStatus = true;

    Object.entries(formData).forEach((entry) => {
      const [key, value] = entry;
      if (key === "company") return;

      if (key === "email" && !/(.+)@(.+){2,}\.(.+){2,}/.test(value)) {
        dispatch({ type: "setFormError", key, value: "must be valid" });
        validationStatus = false;
      }

      if (value.length <= 2) {
        dispatch({
          type: "setFormError",
          key,
          value: "longer than 2 characters",
        });
        validationStatus = false;
      }

      if (!value) {
        dispatch({ type: "setFormError", key, value: "cannot be empty" });
        validationStatus = false;
      }
    });

    return validationStatus;
  };

  const handleSubmitMessage = async (e) => {
    e.preventDefault();

    if (!validateFormFields()) {
      setShakeButton(true);
      setTimeout(() => {
        setShakeButton(false);
      }, 500);
      return;
    }

    setSendMessageLoading(true);

    const req = await fetch("/api/sendgrid", {
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await req.json();

    setSendMessageLoading(false);

    if (error) return setSendError(error);

    setShowModal(true);
    dispatch({ type: "resetForm" });
  };

  const inputChangeHandler = (e) => {
    dispatch({
      type: "setFormField",
      key: e.target.id,
      value: e.target.value,
    });
  };

  return (
    <div
      id='contact'
      className='scroll-mt-20 flex flex-col mb-10 items-center mt-20 md:w-1/2 mx-auto '
    >
      <h1
        ref={ref}
        className={`text-4xl md:text-5xl  ${
          isCurrentSection && "underline "
        } md:mb-10`}
      >
        Contact
      </h1>
      <div className='flex flex-col gap-10 w-screen md:w-full text-xl md:text-xl'>
        <p data-aos='fade-up' className='self-center'>
          Want to get in touch? Feel free to use the form below!
        </p>
        <div>
          <form className='flex flex-col gap-2' onSubmit={handleSubmitMessage}>
            <label htmlFor='fullname'>
              Name{" "}
              <span className='text-red-500'>
                * {formData.formErrors.fullname}
              </span>
            </label>
            <input
              id='fullname'
              className={`p-4 rounded-md bg-gray-200 dark:bg-transparent border-2 ${
                formData.formErrors.fullname && "border-4 border-red-600"
              }`}
              type='text'
              value={formData.fullname}
              onChange={inputChangeHandler}
            />
            <label htmlFor='email'>
              Email{" "}
              <span className='text-red-500'>
                * {formData.formErrors.email}
              </span>
            </label>
            <input
              id='email'
              className={`p-4 rounded-md bg-gray-200 dark:bg-transparent border-2 ${
                formData.formErrors.email && "border-4 border-red-600"
              }`}
              type='text'
              value={formData.email}
              onChange={inputChangeHandler}
            />
            <label htmlFor='company'>Company name</label>
            <input
              id='company'
              className='p-4 rounded-md bg-gray-200  dark:bg-transparent border-2'
              type='text'
              value={formData.company}
              onChange={inputChangeHandler}
            />
            <label htmlFor='message'>
              Message{" "}
              <span className='text-red-500'>
                * {formData.formErrors.message}
              </span>
            </label>
            <textarea
              id='message'
              className={`p-4 resize-none h-40 text-base rounded-md bg-gray-200 dark:bg-transparent border-2 ${
                formData.formErrors.message && "border-4 border-red-600"
              }`}
              type='text'
              value={formData.message}
              onChange={inputChangeHandler}
            />
            <button
              disabled={Object.values(formData.formErrors).some((err) => err)}
              className={`w-40 border-2 transition hover:bg-gray-300 hover:shadow-sm dark:hover:bg-white dark:hover:text-black p-2 rounded-md mt-4 disabled:bg-red-500 disabled:hover:bg-red-500 disabled:cursor-not-allowed disabled:text-white disabled:dark:hover:bg-red-500 disabled:dark:hover:text-white
               ${shakeButton && "animate-shakeError"} `}
            >
              {sendMessageLoading ? (
                <>
                  <svg
                    role='status'
                    className='inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600'
                    viewBox='0 0 100 101'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                      fill='currentColor'
                    />
                    <path
                      d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                      fill='currentFill'
                    />
                  </svg>
                  Sending
                </>
              ) : (
                "Send"
              )}
            </button>
          </form>
        </div>
        <p className='text-base'>
          Alternatively, you can send me an email at{" "}
          <span
            onClick={handleCopyEmail}
            className={`group border-2 relative  p-2 rounded-lg cursor-pointer z-20 hover:bg-gray-300 dark:hover:bg-white dark:hover:text-black ${
              showCopySuccess &&
              "bg-green-500 hover:bg-green-500 dark:hover:bg-green-500 dark:text-black text-white"
            }`}
          >
            <span>jezdicn15@gmail.com</span>
            <span className='hidden group-hover:inline w-2/3 dark:text-white text-center absolute top-10 left-1/2 -translate-x-1/2'>
              click to copy
            </span>
            {showCopySuccess && (
              <span className='w-full text-green-500 text-center dark:bg-[#232222] bg-white absolute top-10 left-1/2 -translate-x-1/2'>
                copied to clipboard!
              </span>
            )}
          </span>
        </p>
      </div>
      <Modal onClose={() => setShowModal(false)} show={showModal} />
    </div>
  );
};

export default Contact;
