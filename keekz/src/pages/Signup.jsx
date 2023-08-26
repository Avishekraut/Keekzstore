import SignOptions from '../component/SignOptions'
import TextInputs from '../component/TextInputs'
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
            <p>OR</p>
            <div className="personal-details">
                <TextInputs type="text" placeholder="Full name"/>
                <TextInputs type="email" placeholder="Email"/>
                <TextInputs type="text" placeholder="Username"/>
                <TextInputs type="password" placeholder="Password"/>
            </div>
        </div>
    </div>
  )
}

export default Signup
