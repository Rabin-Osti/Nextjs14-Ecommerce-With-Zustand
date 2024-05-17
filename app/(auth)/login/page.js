"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import Link from "next/link";

const Register = () => {
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);
  const [info, setInfo] = useState({ email: "", password: "" });
  const router = useRouter();
  function handleInput(e) {
    setInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!info.email || !info.password) {
      setError("Must provide all the credentials.");
      return;
    }
    try {
      setPending(true);
      const res = await signIn("credentials", {
        email: info.email,
        password: info.password,
        redirect: false,
      });

      if (res.error) {
        setError("Invalid Credentials.");
        setPending(false);
        return;
      }
      router.replace("/");
    } catch (error) {
      setPending(true);
      console.log(error);
    }
  }
  return (
    <div className="sectionContainer formContainer container">
      <form onSubmit={handleSubmit}>
        <div className="formInner">
          <div className="top">
            <h3>Login</h3>
          </div>
          <div className="inputWrapper">
            <div className="inputField">
              <input
                type="text"
                name="email"
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
                name="password"
                value={info.password}
                onChange={(e) => handleInput(e)}
              />

              <label className={info.password ? "active" : ""}>Password</label>
            </div>
          </div>
          {error && <span className="message">{error}</span>}
          <button className="primary-btn" disabled={pending ? true : false}>
            {pending ? "Logging" : "Login"}
          </button>
          <span className="formText">
            Dont' have an account?{" "}
            <Link href="/register" className="hoverEffect">
              Register
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Register;
