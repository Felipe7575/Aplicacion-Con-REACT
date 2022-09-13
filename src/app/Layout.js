import {Link,Outlet} from 'react-router-dom';
import React from 'react'
import NavBar  from '../components/NavBar';
import CarritoIcon from '../components/CarritoIcon';


 const Layout = () => {
  
  return (
    <div className="container-general">
        <NavBar>
            <CarritoIcon CANT={1}/>
        </NavBar>
        <Outlet/>
    </div>
  )
}

export default Layout;
