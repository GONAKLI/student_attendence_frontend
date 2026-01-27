import { Link } from "react-router-dom";
import '../css/selection.css'

function Selection() {
  const student_img =
    "https://cdn0.iconfinder.com/data/icons/kameleon-free-pack-rounded/110/Student-3-1024.png";
  const teacher_img =
    "https://tse3.mm.bing.net/th/id/OIP.VQO3GusvipKi_6rnCRUrcwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3";
  const admin_img =
    "https://static.vecteezy.com/system/resources/previews/015/145/649/original/man-with-the-inscription-admin-icon-color-outline-vector.jpg";

  const options = [
    { label: "Student", img: student_img, link: "/student" },
    { label: "Teacher", img: teacher_img, link: "/teacher" },
    { label: "Admin", img: admin_img, link: "/admin" },
  ];

  return (
    <section className="selection-container">
      <h2 className="selection-title">Choose Your Role</h2>
      <div className="selection-grid">
        {options.map((opt, idx) => (
          <Link to={opt.link} key={idx} className="selection-card">
            <img className="selection-image" src={opt.img} alt={opt.label} />
            <p className="selection-label">{opt.label}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Selection;
