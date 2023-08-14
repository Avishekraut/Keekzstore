import img1 from "../images/img1.png";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.png";

const Hero = () => {
  return (
    <section>
    <div className="card-container">
      <div className="left-column">
        <img src={img1} alt=""></img>
      </div>
      <div className="right-column">
        <div className="card1">
          <img src={img2} alt=""></img>
        </div>
        <div className="card2">
          <img src={img3} alt=""></img>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Hero;
