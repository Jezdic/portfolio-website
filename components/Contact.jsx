import useSelectSection from "../utils/useSelectSection";
import useSectionTitle from "../utils/useSectionTitle";

const Contact = () => {
  const ref = useSelectSection("contact");
  const isCurrentSection = useSectionTitle("contact");

  return (
    <div
      id='contact'
      className='scroll-mt-20 mb-[199rem] flex flex-col items-center mt-20 md:w-1/2 mx-auto '
    >
      <h1
        ref={ref}
        className={`text-4xl md:text-5xl  ${
          isCurrentSection && "underline "
        } md:mb-10`}
      >
        Contact
      </h1>
      <div className='flex flex-col gap-10 w-screen md:w-full text-xl md:text-2xl justify-center'>
        <p data-aos='fade-up'>Want to get in touch? Use the form below!</p>
        <div>
          <form className='flex flex-col gap-2'>
            <label htmlFor='fullname'>
              Name <span className='text-red-500'>*</span>
            </label>
            <input
              id='fullname'
              data-aos='fade-right'
              className='p-4 rounded-md bg-gray-200 dark:bg-transparent border-2'
              type='text'
            />
            <label htmlFor='email'>
              Email <span className='text-red-500'>*</span>
            </label>
            <input
              id='email'
              data-aos='fade-right'
              className='p-4 rounded-md bg-gray-200  dark:bg-transparent border-2'
              type='text'
            />
            <label htmlFor='message'>
              Message <span className='text-red-500'>*</span>
            </label>
            <textarea
              id='message'
              data-aos='fade-right'
              className='p-4 resize-none h-40 text-base rounded-md bg-gray-200 dark:bg-transparent border-2 '
              type='text'
            />
            <button className='w-40 border-2 transition hover:bg-gray-300 hover:shadow-sm dark:hover:bg-white dark:hover:text-black p-2 rounded-md mt-4 '>
              Send
            </button>
          </form>
        </div>
        <p>
          Alternatively, you can send me an email at{" "}
          <span>jezdicn15@gmail.com</span>
        </p>
      </div>
    </div>
  );
};

export default Contact;
