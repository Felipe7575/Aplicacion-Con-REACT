import React, { useEffect } from 'react'
import Item from './Item'
import { useState } from "react";
import {getProductos} from "../api";
import {useParams} from 'react-router-dom';
import { getDetails } from '../api';


const ItemListContainer = () => {
  const [art, setArt] = useState([]);
  const {catId=0} = useParams();
    useEffect(() =>{
      if(catId != null){
        getProductos(catId).then((res=[]) => {     
          setArt(res);
          console.log("res");
          console.log(res);
        });
      } 
    },[catId]);
    


  return (
    <div className='list-container'>
        
        <div className="item-list"> 
            {
              
              art.map((articulo) => {
                  return <Item key={articulo.id}  id={articulo.id} name={articulo.name} stock={articulo.stock} precio={articulo.precio} image={articulo.img[0] }> </Item>
              })
                
            }
        </div>
    </div>
  )
}

export default ItemListContainer;