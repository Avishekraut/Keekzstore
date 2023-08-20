import React from "react";
import categoryimg1 from "../images/category-card-img1.jpg";
import categoryimg2 from "../images/category-card-img2.jpg";
import categoryimg3 from "../images/category-card-img3.jpg";
import allButton from "../images/svgs/arrow_trend_right_up.svg";
import previousButton from "../images/svgs/chevron-back-outline.svg";
import forwardButton from "../images/svgs/chevron_forward.svg";

const Categories = () => {
  return (
    <div className="categories-container">
      <div className="title-box">
        <div className="title-con">
          <h2>Categories</h2>
        </div>
        <div className="arrow-buttons">
          <button>
            <img src={previousButton} alt="" />
          </button>
          <button>
            <img src={forwardButton} alt="" />
          </button>
        </div>
      </div>
      <div className="categories-box">
        <div className="first-card-image">
          <img src={categoryimg1} alt="" />
          <div className="first-card-text">
            <h2>Lifestyle</h2>
          </div>
          <div className="seemore-button">
            <img src={allButton} alt="" />
          </div>
        </div>
        <div className="second-card-image">
          <img src={categoryimg2} alt="" />
          <div className="second-card-text">
            <h2>Basketball</h2>
          </div>
          <div className="seemore-button">
            <img src={allButton} alt="" />
          </div>
        </div>
        <div className="third-card-image">
          <img src={categoryimg3} alt="" />
          <div className="third-card-text">
            <h2>Slides</h2>
          </div>
          <div className="seemore-button">
            <img src={allButton} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
