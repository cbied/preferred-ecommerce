import { CartItemContainer,
         ItemDetails,
         ItemDetailsValues } from './cart-item.styles';
import { CategoryItem } from '../../store/categories/categories.types';

type CartItemProps = {
    cartItem: CategoryItem
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