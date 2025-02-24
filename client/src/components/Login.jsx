import { IoMdPerson } from "react-icons/io";
import { MdOutlinePassword } from "react-icons/md";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Google from "./Google";

export default function Login() {
  const [userData, setUserData] = useState({});
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
    console.log(formData);
  };

  const handleUser = async (data) => {
    localStorage.setItem("userData",JSON.stringify({data}));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.email === "" || formData.password === "") {
      console.log("Please fill out all required fields");
      return;
    }
    try {
      const res = await fetch("/api/user/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.success === false) {
        console.log("Data is not successed");
      }
      if (res.ok) {
        await handleUser(data)
        navigate("/profile");
        // this.setState(userData);
      }
    } catch (err) {
      console.log("Facing Render Error: ", err.message);
    }
  };

  return (
    <>
            <div className="flex flex-col text-center items-center justify-center w-[440px] card">

      <div className="flex flex-col items-center justify-center w-[280px]">
        <h1
          className="flex flex-col items-center justify-center text-[20px] font-bold bg-[#2F008099] w-[280px] h-[50px] text-[#fff]"
          id="login-text"
        >
          Login to your account
        </h1>
        <p className="flex justify-center" id="Nacc">
          Don't have account?{" "}
          <span>
            {" "}
            <Link to={"/signup"}>Sign up</Link>
          </span>
        </p>
        <form
          id="login-form"
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center"
        >
          <IoMdPerson id="person-icon" />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="email"
            onChange={handleChange}
            className="w-[280px] flex text-xl h-[39px]"
          />

          <MdOutlinePassword id="pass-icon" />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-[280px] flex text-xl h-[39px]"
          />
          <div className="flex items-center justify-between w-[280px] text-[12px]">
            <div className="flex" id="rem-me">
              <input type="checkbox" name="remember" id="remember" />
              <label htmlFor="remember" id="remember-me">
                Remember me
              </label>
            </div>
            <div className="flex" id="repass">
              <Link to="/fgquiz">Forgotten password?</Link>
            </div>
          </div>
          <button
            type="submit"
            id="login"
            className="w-[158px] h-[39px] cursor-pointer"
          >
            Login
          </button>
        </form>
        <Google />
      </div>
      </div>
    </>
  );
}
