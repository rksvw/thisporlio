import { IoMdPerson } from "react-icons/io";
import { MdOutlinePassword } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { BsTwitterX } from "react-icons/bs";
import { useState } from "react";

export default function Login() {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.email ===  "" || formData.password === "") {
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
      if (data.success === false) {
        console.log("Data is not successed");
      }
      if (data.ok) {
        console.log(data);
      }
    } catch (err) {
      console.log("Facing Render Error: ", err.message);
    }
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center w-[280px]">
        <h1
          className="flex flex-col items-center justify-center text-[20px] font-bold bg-[#2F008099] w-[280px] h-[50px] text-[#fff]"
          id="login-text"
        >
          Login to your account
        </h1>
        <p className="flex justify-center" id="Nacc">
          Don't have account? <span>Sign up</span>
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
              <a href="#">Forgotten password?</a>
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
        <button id="gglOAuth">
          <FcGoogle id="gglIcon" />
          <p>Sign in with Google</p>
        </button>
        <button id="xOAuth">
          <BsTwitterX id="xIcon" />
          <p>Sign in with X (Twitter)</p>
        </button>
      </div>
    </>
  );
}
