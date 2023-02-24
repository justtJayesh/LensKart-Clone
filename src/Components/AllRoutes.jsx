import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Cart from '../Pages/Cart';
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
            <Route path='/cart' element={<Cart />}></Route>
            <Route path='*' element={<NotFound />}></Route>
        </Routes>
    );

}

export default AllRoutes