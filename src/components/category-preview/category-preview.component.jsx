import ProductCard from '../product-card/product-card.component'
import { Link } from 'react-router-dom'
import './category-preview.styles.scss'

const CategoryPreview = ({ title, products }) => {

    return(
        <div className='category-preview-container'>
            <Link to={`/shop/${title}`}>
                <h2>
                    <span className='title'>{ title.toUpperCase() }</span>
                </h2>
            </Link>
            <div className='preview'>
                {
                    products
                    .slice(0,4)
                    .map((product) => <ProductCard key={product.id} product={product}/>)
                }
            </div>
        </div>
    )
}


export default CategoryPreview