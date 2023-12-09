import { CartItemContainer,
         ItemDetails,
         ItemDetailsValues } from './cart-item.styles';
import { CartItemType } from '../../store/cart/cart.types';

type CartItemProps = {
    cartItem: CartItemType
}

const CartItem = ({ cartItem }: CartItemProps) => {
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
}

export default CartItem;