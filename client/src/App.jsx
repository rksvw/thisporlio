import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Quiz from "./components/Quiz";
import ForgotPass from "./components/ForgotPass";
import ProfilePage from "./pages/ProfilePage";
import { useState } from "react";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
        <Routes>
          <Route path="/fgpass" element={<ForgotPass />} />
        </Routes>
        <Routes>
          <Route path="/fgquiz" element={<Quiz />} />
        </Routes>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
          </Routes>
          <Routes>
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
