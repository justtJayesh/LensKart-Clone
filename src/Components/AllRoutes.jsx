import React from 'react';
import {Routes, Route} from 'react-router-dom'
import AddToCart from '../Pages/AddToCart';
import Checkout from '../Pages/Checkout';
import Home from '../Pages/Home';
import NotFound from '../Pages/NotFound';
import Products from '../Pages/Products';
import SingleProduct from '../Pages/SingleProduct';



const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/products' element={<Products />}></Route>
            <Route path='/products/:id' element={<SingleProduct />}></Route>
            <Route path='/addtocart' element={<AddToCart/>}></Route>
            <Route path='/checkout' element={<Checkout />}></Route>
            <Route path='*' element={<NotFound />}></Route>
        </Routes>
    );

}

export default AllRoutes