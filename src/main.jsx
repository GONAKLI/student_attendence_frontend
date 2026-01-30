import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Signup_admin from "../components/admin-material/admin_signup.jsx";
import Selection from "../components/selection.jsx";
import Signin_admin from "../components/admin-material/admin_signin.jsx";
import Admin from "../components/admin-material/admin_auth.jsx";
import AdminDashboard from "../components/admin-material/admin_dashboard.jsx";
import AddTeacherForm from "../components/admin-material/add_teacher.jsx";
import AdminAuth from "../components/admin-material/admin_auth.jsx";
import ViewTeacher from "../components/admin-material/view_teacher.jsx";
import RemoveTeacher from "../components/admin-material/remove_teacher.jsx";

import TeacherSignIn from "../components/teacher-components/teacher-signin.jsx";
import TeacherDashboard from "../components/teacher-components/teacher_dashboard.jsx";
import MarkAttendance from "../components/teacher-components/Mark_Attendance.jsx";

const router = createBrowserRouter([
  {
    path: "/",

    element: <App />,

    children: [
      { path: "/", element: <Selection /> },
      { path: "/admin", element: <AdminAuth /> },

      // { path: "/admin/view-teachers", element: <ViewTeachers /> },
      // { path: "/admin/view-students", element: <ViewStudents /> },
      // { path: "/admin/add-course", element: <AddCourseForm /> },
      // { path: "/admin/view-courses", element: <ViewCourses /> },
    ],
  },
  {
    path: "/admin/dashboard",
    element: <AdminDashboard />,
    children: [
      { path: "add-teacher", element: <AddTeacherForm /> },
      { path: "view-teacher", element: <ViewTeacher /> },

      { path: "remove-teacher", element: <RemoveTeacher /> },
    ],
  },
  {
    path: "/teacher",
    element: <TeacherSignIn />,
  },
  ,
  {
    path: "/teacher/dashboard",
    element: <TeacherDashboard />,
  },
  {
    path: "/teacher/dashboard/mark-attendance",
    element: <MarkAttendance />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
