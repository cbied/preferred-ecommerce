import CategoryItem from './category-item.component'
import categoryData from '../assets/categories.json';
import './categories.styles.scss';

const Categories = () => {
    return (
        <div className='categories-container'>
      {
        categoryData.categories.map(categoryProduct => {
          return (
            <CategoryItem categoryProduct={categoryProduct} key={categoryProduct.id}/>
          )
        })
      }
    </div>
    )
}

export default Categories