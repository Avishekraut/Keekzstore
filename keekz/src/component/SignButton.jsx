import allButton from "../images/svgs/arrow_trend_right_up.svg";

const SignButton = (props) => {
  return (
    <div className="button">
    <button>
        <p>{props.label}</p>
        <img src={allButton} alt="" />
    </button>
    </div>
  )
}

export default SignButton
