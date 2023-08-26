import SignOptions from '../component/SignOptions'
import image from '../images/login-signup.png'
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
            <SignOptions/>
        </div>
    </div>
  )
}

export default Signup
