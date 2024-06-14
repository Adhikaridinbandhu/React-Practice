import "../Css/Feature.css";
import digitalImage from "../assets/image/digital.jpg";
import featureImage2 from "../assets/image/feature2.jpg";
import featureImage3 from "../assets/image/feature3.jpg";
import { FaDesktop } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import { CiCreditCard1 } from "react-icons/ci";
const Feature = () => {
  return (
    <>
      <div className="feature-wrapper">
        <div className="feature-head-wrapper">
          <h3 className="feature-head-1">features</h3>
          <h1 className="feature-head-2">
            Everything you need in a modern bank <br /> and more.
          </h1>
        </div>
        <div className="feature-body-wrapper container">
          <div className="digital">
            <img
              className="digital-image"
              src={digitalImage}
              alt="digital-image"
            />

            <div>
              <div className="feature-icons">
                <FaDesktop />
              </div>
              <h2 className="feature-body-head">100% digital bank</h2>
              <p className="feature-body-para-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                ipsum dolores amet ut, iste officia omnis et necessitatibus
                accusantium aliquam!
              </p>
            </div>
          </div>
          <div className="digital feature-body-2">
            <div>
              <div className="feature-icons">
                <FaArrowTrendUp />
              </div>

              <h2 className="feature-body-head">Watch your money grow</h2>
              <p className="feature-body-para-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt corrupti aliquid ad velit nisi ab, dicta laboriosam
                quia sit qui?
              </p>
            </div>
            <img
              className="digital-image"
              src={featureImage2}
              alt="feature2-image"
            />
          </div>
          <div className="digital">
            <img
              className="digital-image"
              src={featureImage3}
              alt="feature3-image"
            />
            <div>
              <div className="feature-icons">
                <CiCreditCard1 />
              </div>
              <h2 className="feature-body-head">Free debit card included</h2>
              <p className="feature-body-para-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                ipsum dolores amet ut, iste officia omnis et necessitatibus
                accusantium aliquam!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Feature;
