import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context';
import { CheckoutContainer,
         CheckoutHeader,
         HeaderBlock,
         NoItemsInCart,
         Total } from './checkout.styles';

const Checkout = () => {
    const { cartItems, cartTotal } = useContext(CartContext);

    return(
        <CheckoutContainer>
        <CheckoutHeader>
          <HeaderBlock>
            <span>Product</span>
          </HeaderBlock>
          <HeaderBlock>
            <span>Description</span>
          </HeaderBlock>
          <HeaderBlock>
            <span>Quantity</span>
          </HeaderBlock>
          <HeaderBlock>
            <span>Price</span>
          </HeaderBlock>
          <HeaderBlock>
            <span>Remove</span>
          </HeaderBlock>
        </CheckoutHeader>
        {cartItems.length ? cartItems.map((cartItem) => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))
          :
          <NoItemsInCart as='H3'>No Items in cart</NoItemsInCart>
      }
        <Total>TOTAL: ${cartTotal}</Total>
      </CheckoutContainer>
    )
}

export default Checkout;