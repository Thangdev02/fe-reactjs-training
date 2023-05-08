import { Route, Routes } from "react-router-dom";
import { routes } from ".";
import HomePage from "../components/pages/HomePage";
import LoginPage from "../components/pages/LoginPage";
import RegisterPage from "../components/pages/RegisterPage";
import ForgotPasswordPage from "../components/pages/ForgotPassword";

function AppRoutes() {
  return (
    <Routes>
      <Route path={routes.home} element={<HomePage />} />
      <Route path={routes.login} element={<LoginPage />} />
      <Route path={routes.register} element={<RegisterPage />} />
      <Route path={routes.forgotPassword} element={<ForgotPasswordPage />} />
    </Routes>
  );
}

export default AppRoutes;
