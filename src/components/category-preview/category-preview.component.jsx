import ProductCard from '../product-card/product-card.component'
import { Link } from 'react-router-dom'
import './category-preview.styles.scss'

const CategoryPreview = ({ title, products }) => {

    return(
        <div className='category-preview-container'>
            
                <h2>
                    <span className='title'>
                        <Link to={title}>{ title.toUpperCase() }</Link>
                    </span>
                </h2>
            
            <div className='preview'>
                {
                    products
                    .slice(0,4)
                    .map((product) => <ProductCard key={product.id} product={product}/>)
                }
            </div>
            <p className='view-more'>
                <Link to={title}>View More</Link>
            </p>
        </div>
    )
}


export default CategoryPreview