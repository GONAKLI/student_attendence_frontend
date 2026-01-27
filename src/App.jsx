import { Outlet } from "react-router-dom";
import Signup_admin from "../components/admin-material/admin_signup";
import Header_part from "../components/header-part";
import Selection from "../components/selection";
import Admin from "../components/admin-material/admin_auth";
import AdminDashboard from "../components/admin-material/admin_dashboard";
import AddTeacherForm from "../components/admin-material/add_teacher";





function App() {

  return (
    <>
      <Header_part />
    
     <Outlet/>
      
    </>
  );
}
export default App;
