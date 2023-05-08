import React, { useState } from "react";
import { login } from "../../services/AuthApi";

function LoginPage() {
  const [username, setUsername] = useState("nghiempt");
  const [password, setPassword] = useState("123");

  const handleLogin = async () => {
    handleUsernameChange();
    handlePasswordChange();
    const isLoginResponse = await login({ username, password });
    if (isLoginResponse) {
      console.log("Login successfully!");
      console.log("Login failed!");
    }
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div>
      <h1>LoginPage</h1>
      <button onClick={() => handleLogin()}>Login</button>
    </div>
  );
}
export default LoginPage;
