import image from "../images/login-signup.png";
import TextInputs from "../component/TextInputs";
import SignButton from "../component/SignButton";
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
        <SignButton label="Login" />
        </div>
    </div>
  )
}

export default Login
