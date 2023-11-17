import { createContext, useReducer } from "react";
import { createAction } from '../utils/reducer/reducer.utils';

const addCartItem = (cartItems, productToAdd) => {
    // find if item is in cart already
    const isExsistingCartItem = cartItems.find(cartItem => cartItem.id === productToAdd.id);
    if(isExsistingCartItem) {
        return cartItems.map(cartItem => (
            // increment the quantity of the item
            cartItem.id === productToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1 }
            :
            cartItem
        ))
    } 
    // if item is not currently in cart, add the item to the cart and give a quantity of 1
    return [...cartItems, { ...productToAdd, quantity: 1}]
}

const removeCartItem = (cartItems, productToRemove) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === productToRemove.id);

        // if user is removing item from cart and quantity is at 1, remove item from cart entirely
        if (existingCartItem.quantity === 1) {
            return cartItems.filter(cartItem => cartItem.id !== productToRemove.id);
          }

        // if user is removing item from cart but has more than 1 of same item, decrease quantity
        return cartItems.map(cartItem => cartItem.id === productToRemove.id ? 
            {...cartItem, quantity: cartItem.quantity - 1 } 
            : 
            cartItem
        )
}

const clearCartItem = (cartItems, cartItemToClear) =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

const CART_ACTION_TYPES = {
    SET_IS_CART_OPEN: 'SET_IS_CART_OPEN',
    SET_CART_ITEMS: 'SET_CART_ITEMS'
  };

const { SET_IS_CART_OPEN, SET_CART_ITEMS } = CART_ACTION_TYPES

export const INITIAL_CART_STATE = {
    isCartOpen: false,
    cartItems: [],
    cartCount: 0,
    cartTotal: 0,
}

export const cartReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case SET_CART_ITEMS:
            return {
                ...state,
                ...payload
            }
        case SET_IS_CART_OPEN:
            return {
                ...state,
                isCartOpen: payload
            }
        default:
            throw new Error(`Unhandled type: ${type} in cartReducer`);
    }

}

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [ state, dispatch ] = useReducer(cartReducer, INITIAL_CART_STATE);
    const { cartItems, cartCount, cartTotal, isCartOpen } = state
    
    const updateCartItemsReducer = (newCartItems) => {
        // update the quantity of the item
        const newCartCount = newCartItems.reduce((total, cartItem) => {
            return total + cartItem.quantity
        }, 0)
        // update total cost of cart items
        const newCartTotal = newCartItems.reduce((total, cartItem) => {
            return total + (cartItem.price * cartItem.quantity)
        }, 0)

        const payload = {
            cartItems: newCartItems,
            cartCount: newCartCount,
            cartTotal: newCartTotal
        }

        dispatch(createAction(SET_CART_ITEMS, payload))
    }

    const addItemToCart = (productToAdd) => {
        // either add item to cart or increment quantity
        const newCartItems = addCartItem(cartItems, productToAdd)
        updateCartItemsReducer(newCartItems)
    }

    const subtractItemFromCart = (productToRemove) => {
        // decrement cartItem quantity
        const newCartItems = removeCartItem(cartItems, productToRemove)
        updateCartItemsReducer(newCartItems)
    }

    const clearItemFromCart = (productToRemove) => {
        // product will be removed from cart
        const newCartItems = clearCartItem(cartItems, productToRemove)
        updateCartItemsReducer(newCartItems)
    }

    const toggleCartOpen = () => {
        dispatch(createAction(SET_IS_CART_OPEN, !isCartOpen))
    }

    const value = { isCartOpen,
                    cartItems,
                    cartCount,
                    cartTotal,
                    addItemToCart, 
                    subtractItemFromCart, 
                    clearItemFromCart,
                    updateCartItemsReducer,
                    toggleCartOpen
                };

    return <CartContext.Provider value={value}>{ children }</CartContext.Provider>
}