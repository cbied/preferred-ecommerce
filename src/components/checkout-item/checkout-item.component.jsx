import './checkout-item.styles.scss';

const CheckoutcartItem = ({ cartItem }) => {
    const { name, quantity, price, imageUrl } = cartItem;

    return(
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={ imageUrl } alt={ name } />
            </div>
            <span className='name'>{ name }</span>

            <span className='quantity'>
                <div className='arrow'> 
                    &#10094; 
                </div>
                <span className='value'>{ quantity }</span>
                
            
                <div className='arrow'> 
                    &#10095; 
                </div>
            </span>
            
            <span className='price'>{ price }</span>
            
            <div className='remove-button'>
                &#10005;
            </div>
        </div>  
    )
}

export default CheckoutcartItem;