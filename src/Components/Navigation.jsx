import logoImage from "../assets/image/logo.png";
import "../Css/Navigation.css";
const Navigation = () => {
  return (
    <>
      <div className="navigation-wrapper container">
        <img className="logo-image" src={logoImage} alt="logo-image" />
        <ul className="nav-links">
          <li className="nav-link">
            <a href="#">Features</a>
          </li>
          <li className="nav-link">
            <a href="#">Operations</a>
          </li>
          <li className="nav-link">
            <a href="#">Testimonials</a>
          </li>
          <button className="nav-btn btn">Open account</button>
        </ul>
      </div>
    </>
  );
};
export default Navigation;
