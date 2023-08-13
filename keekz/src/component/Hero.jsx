import img1 from "../images/YEEZY_MANIA.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.png";

const Hero = () => {
  return (
    <div className="card-container">
      <div className="left-column">
        <img src={img1}></img>
      </div>
      <div className="right-column">
        <div className="card1">
          <img src={img2}></img>
        </div>
        <div className="card2">
          <img src={img3}></img>
        </div>
      </div>
    </div>
  );
};

export default Hero;
