import React, { createContext, useState} from 'react';

export const CartContext = createContext()

const CartContextProvider = ({children}) => {
    
    const [cartItem, setCartItem] = useState([])
    console.log(cartItem)
    
    return <CartContext.Provider value={{cartItem, setCartItem}}>{children}</CartContext.Provider>

}

export default CartContextProvider