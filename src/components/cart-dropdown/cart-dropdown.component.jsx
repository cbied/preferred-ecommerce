import { useContext } from 'react';
import { Link } from "react-router-dom";
import { CartContext } from '../../contexts/cart.context';
import CartItem from '../cart-item/cart-item.component';
import Button from '../button/button.component';
import { CartDropdownContainer,
         EmptyMessage,
         CartItems } from './cart-dropdown.styles';

const CartDropdown = () => {
    const { cartItems, toggleCartOpen } = useContext(CartContext);
    const toggleCartDropDown = () => toggleCartOpen();
    return(
        <CartDropdownContainer>
            <CartItems>
                { 
                    cartItems.length ?
                    cartItems.map(item => <CartItem key={item.id} cartItem={item} />)
                    :
                    <EmptyMessage>No Cart Items</EmptyMessage>
                }
            </CartItems>
            <Link to="/checkout">       
            <Button onClick={toggleCartDropDown}>Go to Checkout</Button>
            </Link>
        </CartDropdownContainer>
    )
}

export default CartDropdown;