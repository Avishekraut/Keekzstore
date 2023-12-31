import image from "../images/login-signup.jpg";
import TextInputs from "../component/TextInputs";
import SignButton from "../component/SignButton";
import SignOptions from "../component/SignOptions";
const Login = () => {
  return (
    <div className="login-container">
      <div className="login-image">
        <img src={image} alt="" />
      </div>
      <div className="login-content">
        <div className="top-title">
          <h1>Login</h1>
          <p>Sign in with</p>
        </div>
        <div className="login-details">
          <TextInputs type="email" placeholder="Email" />
          <TextInputs type="password" placeholder="Password" />
        </div>
        <div className="info">
          <div className="check-optn">
            <TextInputs type="checkbox" className="checkboxes" />
            <p>
              Keep me logged in - applies to all log in options below.{" "}
              <span>
                <a href="/">More Info</a>
              </span>
            </p>
          </div>
        </div>
        <SignButton label="Login" />
        <div className="navigate">
          <p>Don't have an account?</p>
        </div>
        <p>OR</p>
        <SignOptions />
        <p>
          By clicking 'Log In' you agree to our KicksClub Terms & Conditions,
          Kicks Privacy Notice.
        </p>
      </div>
    </div>
  );
};

export default Login;
