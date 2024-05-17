"use client";
import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";

const Register = () => {
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);
  const [info, setInfo] = useState({ username: "", email: "", password: "" });
  const router = useRouter();
  function handleInput(e) {
    setInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(
      `this is password = ${info.password} and ref = ${confirmPassword}`
    );
    if (info.password !== confirmPassword) {
      setError("Password doesn't match.");
      return;
    }
    if (!info.username || !info.email || !info.password) {
      console.log("inside here");
      setError("Must provide all the credentials.");
      return;
    }
    // post in api form data
    try {
      setPending(true);
      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(info),
      });
      if (res.ok) {
        setPending(false);
        const form = e.target;
        form.reset();
        router.push("/login");
      } else {
        console.log("this is response in else = ", res);
        const errorData = await res.json();
        setError(errorData.message);
        setPending(false);
      }
    } catch (error) {
      setPending(false);
      setError("Something went wrong.");
    }
  }
  return (
    <div className="sectionContainer formContainer container">
      <form onSubmit={handleSubmit}>
        <div className="formInner">
          <div className="top">
            <h3>Register</h3>
          </div>
          <div className="inputWrapper">
            <div className="inputField">
              <input
                type="text"
                name="username"
                value={info.username}
                onChange={(e) => handleInput(e)}
                required
              />
              <label className={info.username ? "active" : ""}>Username</label>
            </div>
          </div>
          <div className="inputWrapper">
            <div className="inputField">
              <input
                type="text"
                name="email"
                required
                value={info.email}
                onChange={(e) => handleInput(e)}
              />
              <label className={info.email ? "active" : ""}>Email</label>
            </div>
          </div>
          <div className="inputWrapper">
            <div className="inputField">
              <input
                type="password"
                required
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <label className={confirmPassword ? "active" : ""}>
                Password
              </label>
            </div>
          </div>
          <div className="inputWrapper">
            <div className="inputField">
              <input
                type="password"
                name="password"
                required
                value={info.password}
                onChange={(e) => handleInput(e)}
              />

              <label className={info.password ? "active" : ""}>
                Confirm Password
              </label>
            </div>
          </div>
          {error && <span className="message">{error}</span>}
          <button className="primary-btn" disabled={pending ? true : false}>
            {pending ? "Registering" : "Register"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
