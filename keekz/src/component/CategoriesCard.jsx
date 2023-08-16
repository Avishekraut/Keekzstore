import categoryimg1 from '../images/category-card-img1.jpg'
import categoryimg2 from '../images/category-card-img2.jpg'
import categoryimg3 from '../images/category-card-img3.jpg'
const CategoriesCard = () => {
  return (
    <div className="category-card-component">
      <div className="first-card-image">
        <img src={categoryimg1} alt="" />
        <div className="first-card-text">
        <h2>Lifestyle</h2>
        </div>
      </div>
        <div className="second-card-image">
        <img src={categoryimg2} alt="" />
          <div className="second-card-text">
          <h2>Basketball</h2>
          </div>
        </div>
        <div className="third-card-image">
        <img src={categoryimg3} alt="" />
          <div className="third-card-text">
          <h2>Slides</h2>
          </div>
        </div>
    </div>
  )
}

export default CategoriesCard
