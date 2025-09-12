import { useState } from "react";
import "./LoginModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function LoginModal({ activeModal, closeActiveModal, handleSignUpClick }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (evt) => {
    setEmail(evt.target.value);
  };

  const handlePasswordChange = (evt) => {
    setPassword(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log("submitted the sign in request");
  };

  const isValid = email && password;

  return (
    <>
    <ModalWithForm
    title="Sign In"
      buttonText="Sign In"
      additionalText={
        <p className="modal__link_text">or
        <button
          type="button"
          className="modal__link"
          onClick={handleSignUpClick}
        >Sign up</button></p>
      }
      // contentStyle={{ "--modal-min-height": "304px" }}
      activeModal={activeModal}
      closeActiveModal={closeActiveModal}
      onSubmit={handleSubmit}
      isValid={isValid}
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
  )
}

export default LoginModal;
