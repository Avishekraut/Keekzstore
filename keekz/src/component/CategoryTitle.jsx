import previousButton from '../images/svgs/chevron-back-outline.svg'
import forwardButton from '../images/svgs/chevron_forward.svg'
const CategoryTitle = () => {
  return (
    <div className="title-container">
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

  )
}

export default CategoryTitle
