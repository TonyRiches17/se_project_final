// import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./SuccessSignupModal.css";
import closebutton from "../../assets/closebutton.svg";


function SuccessSignupModal({ activeModal, closeActiveModal, handleSignInClick }) {
  return (
    <>
    {/* <ModalWithForm
    title="Registration successfully completed!"
    additionalText={<button onClick={handleSignInClick} className="modal__success-signin">Sign in</button>}
    activeModal={activeModal}
    closeActiveModal={closeActiveModal}
    /> */}
    <div className={`modal ${activeModal && "modal_opened"}`}>
          <div className="success-modal__content">
            <button onClick={closeActiveModal} type="button" className="success-modal__close-button">
              <img src={closebutton} alt="Picture of close button 'X'" className="success-modal__close-button-image" />
            </button>
            <div className="success-modal__container">
            <h2 className="success-modal__title">Registration successfully completed!</h2>
            <button onClick={handleSignInClick} className="success-modal__signin">Sign in</button>
            </div>
          </div>
        </div>
    </>
  )
}

export default SuccessSignupModal;