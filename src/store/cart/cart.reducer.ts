import { AnyAction } from 'redux';
import { setToggleIsCartOpen, setCartItems } from './cart.action';
import { CartItemType } from './cart.types';

export type CartState = {
    isCartOpen: boolean,
    cartItems: CartItemType[]
}

export const INITIAL_CART_STATE: CartState = {
    isCartOpen: false,
    cartItems: []
}

export const cartReducer = (
    state = INITIAL_CART_STATE,
    action: AnyAction
    ): CartState => {
    if(setToggleIsCartOpen.match(action)) {
        return { ...state, isCartOpen: action.payload }
    }
    if(setCartItems.match(action)) {
        return { ...state, cartItems: action.payload }
    }

    return state
}