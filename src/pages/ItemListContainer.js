import { useEffect } from 'react'
import Item from '../components/Item'
import { useState } from "react";

import {useParams} from 'react-router-dom';
import {getItems,getItemsByCondition } from '../app/api';


const ItemListContainer = () => {
  const [art, setArt] = useState([]);
  const {catId=0} = useParams();
    useEffect(() =>{  
      if(!(parseInt(catId) === 0)){
        getItemsByCondition("ARTICULOS","catId",parseInt(catId)).then((result) => {
          setArt(result);
      });
      }
      else{
        getItems("ARTICULOS").then((result) => {
          setArt(result);
        });
      }
      
    },[catId]);
  return (
    <div className='list-container'>
        <div className="item-list"> 
            {
              
              art.map((articulo) => {
                  return <Item key={articulo.id}  id={articulo.id} name={articulo.name} stock={articulo.stock} precio={articulo.precio} image={articulo.img[0]} precioOferta={articulo.precioOferta} > </Item>
              })
        
            }
        </div>
    </div>
  )
}

export default ItemListContainer;