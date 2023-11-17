import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { CartIconContainer,
         ShoppingIconSvg,
         ItemCount } from './cart-icon.styles';

const CartIcon = () => {
    const { cartCount, toggleCartOpen } = useContext(CartContext);
    
    const toggleCartDropDown = () => toggleCartOpen();

    return(
        <CartIconContainer onClick={toggleCartDropDown}>
            <ShoppingIconSvg className='shopping-icon'/>
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;