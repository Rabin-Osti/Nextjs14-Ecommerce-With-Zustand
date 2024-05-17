"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Address = () => {
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);
  const [info, setInfo] = useState({
    username: "",
    email: "",
    city: "",
    address: "",
  });
  const router = useRouter();
  function handleInput(e) {
    setInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    // post in api form data
    try {
      setPending(true);
    } catch (error) {
      setPending(false);
      setError("Something went wrong.");
    }
  }
  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit}>
        <div className="formInner">
          <div className="top">
            <h3 style={{ marginBottom: "1rem", textAlign: "left" }}>Address</h3>
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
              <input type="text" required name="city" value={info.city} />
              <label className={info.city ? "active" : ""}>City</label>
            </div>
          </div>
          <div className="inputWrapper">
            <div className="inputField">
              <input
                type="text"
                name="address"
                required
                value={info.address}
                onChange={(e) => handleInput(e)}
              />

              <label className={info.address ? "active" : ""}>Address</label>
            </div>
          </div>
          {error && <span className="message">{error}</span>}
          <button className="primary-btn" disabled={pending ? true : false}>
            {pending ? "Placing Order" : "Place Order"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Address;
