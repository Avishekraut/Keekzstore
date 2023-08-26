import SignButton from "../component/SignButton";
import SignOptions from "../component/SignOptions";
import TextInputs from "../component/TextInputs";
import image from "../images/login-signup.png";
const Signup = () => {
  return (
    <div className="register-container">
      <div className="register-image">
        <img src={image} alt="" />
      </div>
      <div className="register-content">
        <div className="top-title">
          <h1>Register</h1>
          <p>Sign up with</p>
        </div>
        <SignOptions />
        <p>OR</p>
        <div className="personal-details">
          <h1>Your Name</h1>
          <TextInputs type="text" placeholder="Full name" />
        </div>
        <div className="gender-options">
          <h1>Gender</h1>
          <div className="options">
            <div className="check-optn">
              <TextInputs type="checkbox" className="checkboxes" />
              <p>Male</p>
            </div>
            <div className="check-optn">
              <TextInputs type="checkbox" className="checkboxes" />
              <p>Female</p>
            </div>
            <div className="check-optn">
              <TextInputs type="checkbox" className="checkboxes" />
              <p>Others</p>
            </div>
          </div>
        </div>
        <div className="login-details">
          <h1>Login Details</h1>
          <TextInputs type="email" placeholder="Email" />
          <TextInputs type="password" placeholder="Password" />
        </div>
            <SignButton label="Register"/>
      </div>
    </div>
  );
};

export default Signup;
