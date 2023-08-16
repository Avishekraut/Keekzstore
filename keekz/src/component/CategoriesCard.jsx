import categoryimg1 from '../images/category-card-img1.png'
import categoryimg2 from '../images/category-card-img2.png'
const CategoriesCard = () => {
  return (
    <div className="category-card-component">
      <div className="first-card-image">
        <img src={categoryimg1} alt="" />
        <div className="first-card-text">
        <h2>Lifestyle shoes</h2>
        </div>
      </div>
        <div className="second-card-image">
        <img src={categoryimg2} alt="" />
          <div className="second-card-text">
          <h2>Basketball shoes</h2>
          </div>
        </div>
        <div className="third-card-image">
        <img src={categoryimg2} alt="" />
          <div className="third-card-text">
          <h2>Basketball shoes</h2>
          </div>
        </div>
    </div>
  )
}

export default CategoriesCard
