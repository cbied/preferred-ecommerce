import { createContext, useState, useEffect } from "react";

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


export const CartContext = createContext({
    isCartOpen: false,
    setisCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    subtractItemFromCart: () => {},
    removeItemFromCart: () => {},
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
        // listen for cartItems to be changed
        // if cartItems are changed, update the quantity of the item
        const newCartCount = cartItems.reduce((total, cartItem) => {
            return total + cartItem.quantity
        }, 0)
        
        setCartCount(newCartCount);

}, [ cartItems ])

    useEffect(() => {
        // listen for cartCount to be changed
        // if cartCount is changed, update total price of cart
        const newCartTotal = cartItems.reduce((total, cartItem) => {
            return total + (cartItem.price * cartItem.quantity)
        }, 0)

        setCartTotal(newCartTotal)

        }, [ cartItems ])

    const addItemToCart = (productToAdd) => {
        // either add item to cart or increment quantity
        setCartItems(addCartItem(cartItems, productToAdd))
    }

    const subtractItemFromCart = (productToRemove) => {
        // decrement cartItem quantity
        setCartItems(removeCartItem(cartItems, productToRemove))
    }

    const removeItemFromCart = (productToRemove) => {
        // update quantity to 1 so when run through helper function removeCartItem, 
        // product will be removed from cart
        productToRemove.quantity = 1
        setCartItems(removeCartItem(cartItems, productToRemove))
    }

    const value = { isCartOpen, 
                    setisCartOpen, 
                    cartItems, 
                    setCartItems, 
                    addItemToCart, 
                    subtractItemFromCart, 
                    removeItemFromCart, 
                    cartCount, 
                    cartTotal 
                };

    return <CartContext.Provider value={value}>{ children }</CartContext.Provider>
}