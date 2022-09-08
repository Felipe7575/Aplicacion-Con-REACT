import React from 'react'
import JustifiedExample from "../components/NavBar";
import NavBar from "../components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import CarritoIcon from "../components/CarritoIcon";
import ItemListContainer from "../components/ItemListContainer";
import { useState } from "react";
import ItemDetailsContainer from "../components/ItemDetailsContainer";
import { Link } from 'react-router-dom';



const Home = () => {
    const [carrito, setCARRITO] = useState(0);
    const onAdd = (cant) => {
      setCARRITO(carrito + cant);
    };
    return (
      <div >        
          <ItemListContainer callBack={onAdd}></ItemListContainer>
  
          <ItemDetailsContainer callBack={onAdd}> </ItemDetailsContainer>
      </div>
    );
}

export default Home;




