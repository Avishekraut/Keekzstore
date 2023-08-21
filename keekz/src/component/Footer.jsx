import React from "react";
import facebookIcon from "../images/svgs/ic_baseline-facebook.svg";
import tiktokIcon from "../images/svgs/ic_baseline-tiktok.svg";
import instagramIcon from "../images/svgs/mdi_instagram.svg";
import footerImg from "../images/footer-logo.png";

const Footer = () => {
  return (
    <section>
      <div className="footer-container">
        <div className="footer-info">
          <div className="aboutus">
            <h2>About us</h2>
            <h5>
              We are the biggest hyperstore in the universe. We got you all
              cover with our exclusive collections and latest drops.
            </h5>
          </div>
          <div className="footer-navigation">
            <div className="categories">
              <div className="title-names">
                <h2>Categories</h2>
              </div>
              <div className="links">
                <a href="/">Lifestyle</a>
                <a href="/">Basketball</a>
                <a href="/">Slides</a>
                <a href="/">Classics</a>
                <a href="/">Dunks</a>
                <a href="/">Unisex</a>
              </div>
            </div>
            <div className="company">
              <div className="title-names">
                <h2>Company</h2>
              </div>
              <div className="links">
                <a href="">About</a>
                <a href="">Contact</a>
              </div>
            </div>
            <div className="social-icons">
              <div className="title-names">
                <h2>Follow us</h2>
              </div>
              <div className="icons">
                <a href="" className="facebook-icon">
                  <img src={facebookIcon} alt="" />
                </a>
                <a href="" className="instagram-icon">
                  <img src={instagramIcon} alt="" />
                </a>
                <a href="" className="tiktok-icon">
                  <img src={tiktokIcon} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-logo">
          <img src={footerImg} alt="" className="footerImg" />
        </div>
      </div>
    </section>
  );
};

export default Footer;
