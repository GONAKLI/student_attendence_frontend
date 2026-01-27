import { useState } from "react";
import { GoFileSubmodule } from "react-icons/go";
import { MdEmail } from "react-icons/md";
import { RiAdminFill, RiLockPasswordFill } from "react-icons/ri";
import "../../css/adminsignin.css";
import { Navigate, redirect, useNavigate } from "react-router-dom";

function Signin_admin() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  async function handleLogin(e) {
    e.preventDefault();
    const { email, password } = formData;

    if (!email || !password) {
      setResponse({ reason: "Please fill in both fields" });
      return;
    }

    try {
      const res = await fetch("https://backend.gonakli.com/admin_signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        credentials: "include",
      });
      let status = await res.json();
      setResponse(status);
      if (status.reason === "user found") { return navigate("/admin/dashboard"); }
    } catch (err) {
      console.error("Error logging in:", err);
      setResponse({ reason: "Server error. Try again later." });
    }

  }

  return (
    <div className="signin-container">
      <p className="signin-caption">
        <RiAdminFill /> Admin Signin
      </p>
      <form className="signin-form" onSubmit={handleLogin}>
        {response && <p className="signin-error">{response.reason}</p>}

        <div className="signin-group">
          <label htmlFor="email" className="signin-label">
            <MdEmail /> Enter E-mail
          </label>
          <input
            type="email"
            id="email"
            className="signin-input"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="signin-group">
          <label htmlFor="password" className="signin-label">
            <RiLockPasswordFill /> Password
          </label>
          <input
            type="password"
            id="password"
            className="signin-input"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button className="signin-button">
          <GoFileSubmodule /> Submit
        </button>
      </form>
    </div>
  );
}

export default Signin_admin;
