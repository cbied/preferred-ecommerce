import { memo } from 'react';
import { CartItemContainer,
         ItemDetails,
         ItemDetailsValues } from './cart-item.styles';

const CartItem = memo(({ cartItem }) => {
    const { name, quantity, price, imageUrl } = cartItem
    return (
        <CartItemContainer>
            <img src={imageUrl} alt={`${name}`} />
            <ItemDetails>
                <ItemDetailsValues>{ name }</ItemDetailsValues>
                <ItemDetailsValues>{ quantity } x ${price}</ItemDetailsValues>
            </ItemDetails>
        </CartItemContainer>
    )
})

export default CartItem;