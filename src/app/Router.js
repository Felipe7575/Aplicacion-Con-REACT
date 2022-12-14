import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';
import Layout from '../app/Layout';
import Carrito  from '../pages/Carrito';
import ItemDetailsContainer from '../pages/ItemDetailsContainer';
import ItemListContainer from '../pages/ItemListContainer';
import  Login  from '../pages/Login';
import { Ordenes } from '../pages/Ordenes';

const Router = () => {
    
    return (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout/>}> 
                <Route index element={<Home/>}/>
                <Route path="/itemDetailsContainer/:artId" element={<ItemDetailsContainer/>}/>
                <Route path="/productos/:catId" element={<ItemListContainer/>}/>"  
                <Route path="/carrito" element={<Carrito/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/ordenes" element={<Ordenes/>}/>
                <Route path="*" element={<div>404</div> } />
                
            </Route>
                
        </Routes>
    </BrowserRouter>
    );
}

export default Router;