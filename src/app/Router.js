import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Layout from '../app/Layout';

const Router = () => {
    <BrowserRouter>
        <Routes>
            <Route element={<Layout/>}> 
                <Route index element={<Home/>}/>
                <Route path="/contact/" element={<Contact/>}/>    
                <Route path="*" element={<div>404</div> } />
            </Route>
        </Routes>
    </BrowserRouter>
}

export default Router;