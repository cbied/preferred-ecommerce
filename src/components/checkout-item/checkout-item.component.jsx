import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context';
import { CheckoutItemContainer,
         ImageContainer,
         CartItemValues,
         Quantity,
         Arrow,
         Value,
         RemoveButton} from './checkout-item.styles';

const CheckoutcartItem = ({ cartItem }) => {
    const { addItemToCart, subtractItemFromCart, clearItemFromCart } = useContext(CartContext);
    const { name, quantity, price, imageUrl } = cartItem;

    const handleQuantityUpdateIncrease = () => addItemToCart(cartItem)
    const handleQuantityUpdateDecrease = () => subtractItemFromCart(cartItem)
    const handleRemoveProductFromCart = () => clearItemFromCart(cartItem)

    return(
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={ imageUrl } alt={ name } />
            </ImageContainer>
            <CartItemValues>{ name }</CartItemValues>

            <Quantity>
                <Arrow onClick={handleQuantityUpdateDecrease}> 
                    &#10094; 
                </Arrow>
                <Value>{ quantity }</Value>
                
            
                <Arrow onClick={handleQuantityUpdateIncrease}> 
                    &#10095; 
                </Arrow>
            </Quantity>
            
            <CartItemValues>{ price }</CartItemValues>
            
            <RemoveButton onClick={handleRemoveProductFromCart}>
                &#10005;
            </RemoveButton>
        </CheckoutItemContainer>  
    )
}

export default CheckoutcartItem;