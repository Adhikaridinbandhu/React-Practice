import heroImage from "../assets/image/hero.png";
import "../Css/Hero.css";
const Hero = () => {
  return (
    <>
      <div className="hero-wrapper container">
        <div className="hero-text-wrapper">
          <h1 className="hero-header">
            When <span className="highlight">banking</span> meets {""}
            <span className="highlight">minimalist</span>
          </h1>
          <p className="hero-para">
            A simpler banking experience for a simpler life.
          </p>
          <li className="hero-link">Learn more ↓</li>
        </div>
        <img className="hero-image" src={heroImage} alt="hero-image" />
      </div>
    </>
  );
};
export default Hero;
