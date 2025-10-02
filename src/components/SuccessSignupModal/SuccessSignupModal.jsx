import { useEffect } from "react";
import "./SuccessSignupModal.css";
import closebutton from "../../assets/closebutton.svg";

function SuccessSignupModal({
  activeModal,
  closeActiveModal,
  handleSignInClick,
}) {
  useEffect(() => {
    const handleEsc = (evt) => {
      if (evt.key === "Escape") {
        closeActiveModal();
      }
    };
    if (activeModal) {
      document.addEventListener("keydown", handleEsc);
    }
    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [activeModal, closeActiveModal]);

  return (
    <>
      <div
        onClick={closeActiveModal}
        className={`modal ${activeModal && "modal_opened"}`}
      >
        <div
          onClick={(evt) => evt.stopPropagation()}
          className="success-modal__content"
        >
          <button
            onClick={closeActiveModal}
            type="button"
            className="success-modal__close-button"
          >
            <img
              src={closebutton}
              alt="Picture of close button 'X'"
              className="success-modal__close-button-image"
            />
          </button>
          <div className="success-modal__container">
            <h2 className="success-modal__title">
              Registration successfully completed!
            </h2>
            <button
              onClick={handleSignInClick}
              className="success-modal__signin"
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SuccessSignupModal;
