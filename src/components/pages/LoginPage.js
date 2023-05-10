import React, { useState } from "react";
import { login } from "../../services/AuthApi";
import { useNavigate } from "react-router-dom";
import { routes } from "../../routes";
import { listMessage } from "../../constants/strings";

function LoginPage() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const formData = {
      username,
      password,
    };
    const isLoginResponse = await login(formData);
    if (isLoginResponse) {
      console.log("🚀 ~ file: LoginPage ~ res:", listMessage.loginSuccess);
      navigate(routes.home);
    } else {
      console.log("🚀 ~ file: LoginPage ~ res:", listMessage.loginFailed);
    }
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div style={{ marginLeft: 100 }}>
      <h1>Login</h1>
      <br />
      <p>username</p>
      <input type="text" value={username} onChange={handleUsernameChange} />
      <br />
      <p>password</p>
      <input type="text" value={password} onChange={handlePasswordChange} />
      <br />
      <br />
      <button onClick={() => handleLogin()}>Login</button>
    </div>
  );
}
export default LoginPage;
