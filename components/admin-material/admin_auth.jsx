import { useState } from "react";
import "../../css/adminauth.css";
import Signin_admin from "./admin_signin";
import Signup_admin from "./admin_signup";

function AdminAuth() {
  const [type, setType] = useState("signin"); // default signin

  return (
    <div className="auth-container">
      <div className="auth-toggle">
        <button
          className={type === "signin" ? "active-btn" : ""}
          onClick={() => setType("signin")}
        >
          🔑 Signin
        </button>
        <button
          className={type === "signup" ? "active-btn" : ""}
          onClick={() => setType("signup")}
        >
          📝 Signup
        </button>
      </div>

      <div className="auth-form">
        {type === "signin" ? <Signin_admin /> : <Signup_admin />}
      </div>
    </div>
  );
}

export default AdminAuth;
