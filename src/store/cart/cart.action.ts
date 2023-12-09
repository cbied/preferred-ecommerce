import { createAction, ActionWithPayload, withMatcher } from "../../utils/reducer/reducer.utils";
import { addCartItem, removeCartItem, clearCartItem } from "../../utils/action/cart.action.utils";
import { CART_ACTION_TYPES, SET_IS_CART_OPEN, SET_CART_ITEMS, CartItemType } from "./cart.types";

export type SetToggleIsCartOpen = ActionWithPayload<CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean>
export type SetCartItems = ActionWithPayload<CART_ACTION_TYPES.SET_CART_ITEMS, CartItemType[]>


export const setToggleIsCartOpen = withMatcher(
    (cartOpen: boolean): SetToggleIsCartOpen => {
    return createAction(SET_IS_CART_OPEN, !cartOpen);
})

export const setCartItems = withMatcher(
    (cartItems: CartItemType[]): SetCartItems => createAction(SET_CART_ITEMS, cartItems)
)

export const setAddItemToCart = (
    productToAdd: CartItemType,
    cartItems: CartItemType[]
    ) => {
    // either add item to cart or increment quantity
    const newCartItems = addCartItem(cartItems, productToAdd)
    return setCartItems(newCartItems)
}

export const setSubtractItemFromCart = (productToRemove: CartItemType, cartItems: CartItemType[]): SetCartItems => {
    // decrement cartItem quantity
    const newCartItems = removeCartItem(cartItems, productToRemove)
    return createAction(SET_CART_ITEMS, newCartItems)
}

export const setClearItemFromCart = (productToRemove: CartItemType, cartItems: CartItemType[]): SetCartItems => {
    // product will be removed from cart
    const newCartItems = clearCartItem(cartItems, productToRemove)
    return createAction(SET_CART_ITEMS, newCartItems)
}