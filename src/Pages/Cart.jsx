import { Heading } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';

const Cart = () => {
    const {cartItem, setCartItems} = useContext(CartContext)
    console.log(cartItem)

    return (
        <div>
            <Heading>These are your Cart Items..</Heading>

        </div>
    );

}

export default Cart