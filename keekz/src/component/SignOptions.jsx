import googlelogo from '../images/svgs/google.svg'
import applelogo from '../images/svgs/apple.svg'
import facebooklogo from '../images/svgs/facebook.svg'

const SignOptions = () => {
  return (
    <div className="socials-options">
        <div className="google">
            <img src={googlelogo} alt="" />
        </div>
        <div className="apple">
            <img src={applelogo} alt="" />
        </div>
        <div className="facebook">
            <img src={facebooklogo} alt="" />
        </div>
    </div>
  )
}

export default SignOptions
