import React, { useEffect } from "react";
import "../../css/admindashboard.css";
import { Link, Outlet, useNavigate } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://backend.gonakli.com/admin/", {
      credentials: "include",
    }).then((res) => {
      if (res.status === 401) {
      return navigate("/admin");
      }
    });
  }, []);

  const handleLogout = async () => {
    try {
      const res = await fetch("https://backend.gonakli.com/admin/logout", {
        method: "POST",
        credentials: "include",
      });
      if (res.ok) {
        console.log("successfully logout");
        navigate("/admin");
      }
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return (
    <div className="admin-container">
      <h1 className="admin-title">⚡ Admin Dashboard</h1>

      {/* 👇 Fixed logout button */}
      <button className="logout-btn-fixed" onClick={handleLogout}>
        🚪 Logout
      </button>

      <div className="admin-grid">
        <Link to="/admin/dashboard/add-teacher">
          <button className="admin-card">➕ Add Teacher</button>
        </Link>
        <Link to="/admin/dashboard/view-teacher">
          <button className="admin-card">👩‍🏫 View Teachers</button>
        </Link>
        <Link to="/admin/dashboard/view-students">
          <button className="admin-card">🎓 View Students</button>
        </Link>
        <Link to="/admin/dashboard/Remove-Student">
          <button className="admin-card danger">❌ Remove Student</button>
        </Link>
        <Link to="/admin/dashboard/remove-teacher">
          <button className="admin-card danger">❌ Remove Teacher</button>
        </Link>
        <button className="admin-card">📚 Add Course</button>
      </div>

      <Outlet />
    </div>
  );
}

export default AdminDashboard;
