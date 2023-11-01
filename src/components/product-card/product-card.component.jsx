import Button from '../button/button.component'
import './product-card.styles.scss'

const ProductCard = ({ product }) => {
    
    return(
        <div key={product.id} className='product-card-container'>
            <img src={product.imageUrl} alt={`${product.name}`}/>
            <div className='footer'>
                <span className='name'>{product.name}</span>
                <span className='price'>{product.price}</span>
            </div>
            <Button buttonType='inverted'>Add to Cart</Button>
        </div>
    )
}

export default ProductCard