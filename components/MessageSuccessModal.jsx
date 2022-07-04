import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const Modal = ({ show, onClose }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <div
      onClick={handleCloseClick}
      className='fixed transition-opacity animate-opacity z-[999] top-0 left-0 w-full h-full flex justify-center items-center bg-[rgba(0,0,0,0.5)]'
    >
      <div className='bg-white text-black rounded-lg relative animate-fadeScale p-12 text-2xl shadow-lg '>
        <div className='absolute top-0 right-4 cursor-pointer'>
          <a onClick={handleCloseClick}>x</a>
        </div>
        <div>
          <p>Thank you, your message has been received!</p>
          <p>You can expect a response within 24 hours.</p>
          <button
            className='px-4 py-2 transition bg-green-500 text-white mt-8 hover:bg-green-600 text-md rounded-md '
            onClick={handleCloseClick}
          >
            I understand
          </button>
        </div>
      </div>
    </div>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
};

export default Modal;
