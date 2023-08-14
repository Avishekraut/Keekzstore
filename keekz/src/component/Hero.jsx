import img1 from "../images/img1.png";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.png";

const Hero = () => {
  return (
    <section>
      <div className="hero-container">
        <div className="left-container">
          <img src={img1} alt="" />
        </div>
        <div className="right-container">
          <img src={img2} alt="" />

          <img src={img3} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
