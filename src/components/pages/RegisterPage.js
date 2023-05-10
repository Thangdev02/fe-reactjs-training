import React, { useState } from "react";
import { register } from "../../services/AuthApi";
import { useNavigate } from "react-router-dom";
import { routes } from "../../routes";
import { listMessage } from "../../constants/strings";

function RegisterPage() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const submit = async () => {
    const formData = {
      username,
      password,
      confirmPassword,
      email,
      phone,
    };
    const isRegisrerResponse = await register(formData);
    if (isRegisrerResponse) {
      console.log(
        "🚀 ~ file: RegisterPage ~ res:",
        listMessage.registerSuccess
      );
      navigate(routes.login);
    } else {
      console.log("🚀 ~ file: RegisterPage ~ res:", listMessage.registerFailed);
    }
  };

  return (
    <div style={{ marginLeft: 100 }}>
      <h1>Register</h1>
      <br />
      <p>username</p>
      <input type="text" value={username} onChange={handleUsernameChange} />
      <br />
      <p>password</p>
      <input type="text" value={password} onChange={handlePasswordChange} />
      <br />
      <p>confirm password</p>
      <input
        type="text"
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
      />
      <br />
      <p>email</p>
      <input type="email" value={email} onChange={handleEmailChange} />
      <br />
      <p>phone</p>
      <input type="text" value={phone} onChange={handlePhoneChange} />
      <br />
      <br />
      <button onClick={() => submit()}>Register</button>
    </div>
  );
}
export default RegisterPage;
