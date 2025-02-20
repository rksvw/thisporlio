import React, { useState } from "react";

function Signup() {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.username ||
      !formData.firstName ||
      !formData.email ||
      !formData.password
    ) {
      console.log("Plese fill out all fields");
    }
    try {
      const res = await fetch("/api/user/signup", {
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
      if (res.ok) {
        console.log(data);
      }
    } catch (err) {
      console.log("Facing Render Error: ", err.message);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div
          className="flex flex-col justify-center items-center text-center w-[280px]"
          id="CNacc"
        >
          <h1 className="flex justify-center items-center" id="Cacc">
            Create new account
          </h1>
          <p>
            Have an account? <span>Login</span>
          </p>
        </div>
        <div className="container">
          <input
            type="text"
            name="firstName"
            id="firstName"
            onChange={handleChange}
            placeholder="Enter your first Name"
          />
        </div>
        <div className="container">
          <input
            type="text"
            name="lastName"
            id="lastName"
            onChange={handleChange}
            placeholder="Enter your last Name"
          />
        </div>
        <div className="container">
          <input
            type="text"
            name="username"
            id="username"
            onChange={handleChange}
            placeholder="Enter your unique username"
          />
        </div>
        <div className="container">
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </div>
        <div className="container">
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            placeholder="Password"
          />
        </div>

        <button type="submit" id="signup">
          Sign up
        </button>
      </form>
    </>
  );
}

export default Signup;
