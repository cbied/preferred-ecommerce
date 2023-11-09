import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
    const isExsistingCartItem = cartItems.find(cartItem => cartItem.id === productToAdd.id);
    if(isExsistingCartItem) {
        return cartItems.map(cartItem => (
            cartItem.id === productToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1 }
            :
            cartItem
        ))
    } 
    return [...cartItems, { ...productToAdd, quantity: 1}]
}

export const CartContext = createContext({
    isCartOpen: false,
    setisCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartCount: 0,
    setCartTotal: () => {},
    cartTotal: 0
})

export const CartProvider = ({ children }) => {
    const [ isCartOpen, setisCartOpen ] = useState(false);
    const [ cartItems, setCartItems ] = useState([]);
    const [ cartCount, setCartCount ] = useState(0);
    const [ cartTotal, setCartTotal ] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => {
            return total + cartItem.quantity
        }, 0)
        
        setCartCount(newCartCount);

}, [ cartItems ])

    useEffect(() => {
        const newCartTotal = cartItems.reduce((total, cartItem) => {
            return total + (cartItem.price * cartItem.quantity)
        }, 0)

        setCartTotal(newCartTotal)

        }, [ cartCount ])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }

    const value = { isCartOpen, setisCartOpen, cartItems, setCartItems, addItemToCart, cartCount, cartTotal };

    return <CartContext.Provider value={value}>{ children }</CartContext.Provider>
}