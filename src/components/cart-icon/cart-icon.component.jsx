import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { CartIconContainer,
         ShoppingIconSvg,
         ItemCount } from './cart-icon.styles';

const CartIcon = () => {
    const { isCartOpen, setisCartOpen, cartCount } = useContext(CartContext);
    
    const toggleCartDropDown = () => setisCartOpen(!isCartOpen);

    return(
        <CartIconContainer onClick={toggleCartDropDown}>
            <ShoppingIconSvg className='shopping-icon'/>
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;