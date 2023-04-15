import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import {
  Signup,
  Login,
  Dashboard,
  ForgotPassword,
  PasswordReset,
} from "./pages";

function App() {
  const user = localStorage.getItem("token");

  return (
    <BrowserRouter>
      <Routes>
        {user && <Route path="/" exact element={<Dashboard />} />}
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/password-reset/:id/:token" element={<PasswordReset />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
