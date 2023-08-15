import CategoriesCard from "./CategoriesCard"
import CategoryTitle from "./CategoryTitle"
import '../css/style.css'
const CategoriesBox = () => {
  return (
    <div className="container-category-box">
      <CategoryTitle/>
      <CategoriesCard/>
    </div>
  )
}

export default CategoriesBox
