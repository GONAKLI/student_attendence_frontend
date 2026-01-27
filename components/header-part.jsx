import { FaUserAstronaut } from "react-icons/fa6";
import "../css/header.css";
import { Link } from "react-router-dom";

function Header_part() {
  return (
    <header className="header-container">
      <div className="header-cover">
        <Link to="/">
      
          <FaUserAstronaut className="header-icon" />
        </Link>
        <h1 className="header-title">Student Attendance System</h1>
      </div>

      <p className="header-subtitle">
        Manage and track student attendance efficiently
      </p>
    </header>
  );
}

export default Header_part;
