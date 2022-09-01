import React, { useEffect } from 'react'
import Item from './Item'
import { useState } from "react";
import {getProductos} from "../api";
import imgJs from "../assets/img/img.js";


const ItemListContainer = ({callBack}) => {
  const [art, setArt] = useState([]);

    useEffect(() =>{
      getProductos().then((articulos) => {
        setArt(articulos);
      })
    .catch(() => {
      console.log("Task error");
      })
    },[]);
  return (
    <div className='list-container'>
        <div>
            OFERTAS DE LA SEMANA
        </div>
        <div className="item-list"> 
            {
            art.map((articulo) => {
              return <Item key={articulo.id} callBack={callBack} id={articulo.id} name={articulo.name} description={articulo.description} stock={articulo.stock} image={imgJs[articulo.id]}> </Item>
                })
            }
        </div>
    </div>
  )
}

export default ItemListContainer;