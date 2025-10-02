import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function LoginModal({
  activeModal,
  closeActiveModal,
  handleSignUpClick,
  handleSignInSubmit,
  setSigninError,
  signinError,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (evt) => {
    setEmail(evt.target.value);
  };

  const handlePasswordChange = (evt) => {
    setPassword(evt.target.value);
  };

  const resetForm = () => {
    setEmail("");
    setPassword("");
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    try {
      await handleSignInSubmit({ email, password });
      resetForm();
      closeActiveModal();
    } catch (err) {
      setSigninError("Invalid or incorrect email or password");
    }
  };

  const isValid = email && password;

  return (
    <>
      <ModalWithForm
        title="Sign In"
        buttonText="Sign In"
        additionalText={
          <p className="modal__link_text">
            or
            <button
              type="button"
              className="modal__link"
              onClick={handleSignUpClick}
            >
              Sign up
            </button>
          </p>
        }
        activeModal={activeModal}
        closeActiveModal={closeActiveModal}
        handleSubmit={handleSubmit}
        isValid={isValid}
        signinError={signinError}
      >
        <label htmlFor="signin-email" className="modal__label">
          Email{""}
          <input
            id="signin-email"
            type="email"
            className="modal__input"
            placeholder="Enter email"
            required
            onChange={handleEmailChange}
            value={email}
          />
        </label>
        <label htmlFor="signin-password" className="modal__label">
          Password{""}
          <input
            id="signin-password"
            type="password"
            className="modal__input"
            placeholder="Enter password"
            required
            onChange={handlePasswordChange}
            value={password}
          />
        </label>
      </ModalWithForm>
    </>
  );
}

export default LoginModal;
