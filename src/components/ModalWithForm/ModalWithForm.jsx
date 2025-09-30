import { useEffect } from "react";
import "./ModalWithForm.css";
import closebutton from "../../assets/closebutton.svg";

function ModalWithForm({ children, title, buttonText, additionalText, activeModal, closeActiveModal, handleSubmit, isValid, signupError, signinError }) {

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
    <div onClick={closeActiveModal} className={`modal ${activeModal && "modal_opened"}`}>
      <div onClick={(evt) => evt.stopPropagation()} className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button onClick={closeActiveModal} type="button" className="modal__close-button">
          <img src={closebutton} alt="Picture of close button 'X'" className="modal__close-button-image" />
        </button>
        <form className="modal__form">
          {children}
          <div className="modal__submit-container">
            <p className="modal__submit-error">{signupError}{signinError} </p>
            <button onClick={handleSubmit} type="submit" className={isValid ? "modal__submit" : "modal__submit_disabled"}>{buttonText}</button>
            <div className="modal__additional-text">{additionalText}</div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ModalWithForm;