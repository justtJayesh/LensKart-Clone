import { Heading } from '@chakra-ui/react';
import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../Context/CartContext';

const AddToCart = () => {
    const { cartItem, setCartItem } = useContext(CartContext)
    // const [items, setItems] = useState([]);

    // useEffect(() => {
    //     const items = JSON.parse(localStorage.getItem('items'));
    //     if (items) {
    //         setItems(items);
    //     }
    // }, []);
    // console.log(items)
    console.log(cartItem)

    return (
        <div>
            <Heading>Cart Items</Heading>
            {
                cartItem?.map((el)=><p>{el.title}</p>)
            }
        </div>
    );
}

export default AddToCart