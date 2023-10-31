import CategoryItem from '../category/category-item.component'
import categoryData from '../../assets/categories.json';
import './directory.styles.scss';

const Directory = () => {
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

export default Directory