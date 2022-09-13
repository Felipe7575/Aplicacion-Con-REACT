import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Layout from '../app/Layout';
import ItemDetailsContainer from '../components/ItemDetailsContainer';
import { useState } from "react";
import { Productos } from '../pages/Productos';

const Router = () => {
    
    return (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout/>}> 
                <Route index element={<Home/>}/>
                <Route path="/contact/" element={<Contact/>}/>  
                <Route path="/itemDetailsContainer/:artId" element={<ItemDetailsContainer/>}/>
                <Route path="/productos/:catId" element={<Productos/>}/>"  
                <Route path="*" element={<div>404</div> } />
            </Route>
        </Routes>
    </BrowserRouter>
    );
}

export default Router;