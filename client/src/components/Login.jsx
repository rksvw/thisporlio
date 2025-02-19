import { IoMdPerson } from "react-icons/io";
import { MdOutlinePassword } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { BsTwitterX } from "react-icons/bs";

export default function Login() {
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
        <div
          id="login-form"
          className="flex flex-col items-center justify-center"
        >
          <IoMdPerson id="person-icon" />
          <input
            type="text"
            name="username"
            id="uname"
            placeholder="Username / email"
            className="w-[280px] flex text-xl h-[39px]"
          />

          <MdOutlinePassword id="pass-icon" />
          <input
            type="password"
            name="password"
            id="upass"
            placeholder="Password"
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
          <button type="submit" id="login" className="w-[158px] h-[39px] cursor-pointer">
            Login
          </button>
        </div>
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
