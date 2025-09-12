import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function RegisterModal({ activeModal, closeActiveModal, handleSignInClick }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleEmailChange = (evt) => {
    setEmail(evt.target.value);
  };

  const handlePasswordChange = (evt) => {
    setPassword(evt.target.value);
  };

  const handleUsernameChange = (evt) => {
    setUsername(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log("submitted the sign up request");
  };

  const isValid = email && password && username;

  return (
    <>
    <ModalWithForm
    title="Sign Up"
      buttonText="Sign Up"
      additionalText={
        <p className="modal__link_text">or
        <button
          type="button"
          className="modal__link"
          onClick={handleSignInClick}
        >Sign in</button></p>
      }
      contentStyle={{ "--modal-min-height": "458px" }}
      activeModal={activeModal}
      closeActiveModal={closeActiveModal}
      onSubmit={handleSubmit}
      isValid={isValid}
    >
      <label htmlFor="signup-email" className="modal__label">
        Email{""}
        <input
          id="signup-email"
          type="email"
          className="modal__input"
          placeholder="Enter email"
          required
          onChange={handleEmailChange}
          value={email}
        />
      </label>
      <label htmlFor="signup-password" className="modal__label">
        Password{""}
        <input
          id="signup-password"
          type="password"
          className="modal__input"
          placeholder="Enter password"
          required
          onChange={handlePasswordChange}
          value={password}
        />
      </label>
      <label htmlFor="signup-username" className="modal__label">
        Username{""}
        <input
          id="signup-username"
          type="text"
          className="modal__input"
          placeholder="Enter your username"
          required
          onChange={handleUsernameChange}
          value={username}
        />
      </label>
      </ModalWithForm>
    </>
  )
}

export default RegisterModal;