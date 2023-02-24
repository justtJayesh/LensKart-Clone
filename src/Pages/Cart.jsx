import { Heading } from '@chakra-ui/react';
import React, { useContext, useState } from 'react';
import { CartContext } from '../Context/CartContext';

const Cart = () => {

    const { cartItem, setCartItem } = useContext(CartContext)
    console.log(cartItem)

    return (
        <div>
            <Heading>These are your Cart Items..</Heading>
        </div>
    );

}

export default Cart