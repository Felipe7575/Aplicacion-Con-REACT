import React, { useEffect } from 'react'
import Item from './Item'
import { useState } from "react";
import {getProductos, getProductos2} from "../api";
import imgJs from "../assets/img/img.js";


const ItemListContainer = ({callBack}) => {
  const [art, setArt] = useState([]);
  let i=0;
    useEffect(() =>{
      getProductos2().then((res) => {
        setArt(res.results);
      });
    },[]);
  return (
    <div className='list-container'>
        <div>
            OFERTAS DE LA SEMANA
        </div>
        <div className="item-list"> 
            {
              
              art.map((articulo) => {
                console.log(articulo);
                  return <Item key={articulo.id} callBack={callBack} id={articulo.id} name={articulo.title} stock={articulo.installments.quantity}  image={articulo.thumbnail}> </Item>
              })
                
            }
        </div>
    </div>
  )
}

export default ItemListContainer;