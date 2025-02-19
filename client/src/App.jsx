import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

function App() {
  console.log('hello');
  return (
    <>
      <BrowserRouter>
        <div className="flex flex-col text-center items-center justify-center w-[440px] card">
          {/* <LoginPage /> */}
          <Routes>
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
