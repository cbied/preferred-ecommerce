import { useContext } from 'react';
import { Link } from "react-router-dom";
import { CartContext } from '../../contexts/cart.context';
import CartItem from '../cart-item/cart-item.component';
import Button from '../button/button.component';
import './cart-dropdown.styles.scss';

const CartDropdown = () => {
    const { cartItems, setisCartOpen } = useContext(CartContext);

    const toggleCartDropDown = () => setisCartOpen(false);

    return(
        <div className='cart-dropdown-container'>
            <div  className='cart-items'>
                { 
                    cartItems.map(item => <CartItem key={item.id} cartItem={item} />)
                }
            </div>
            <Link className='nav-link' to="/checkout">       
            <Button onClick={toggleCartDropDown}>Go to Checkout</Button>
            </Link>
        </div>
    )
}

export default CartDropdown;