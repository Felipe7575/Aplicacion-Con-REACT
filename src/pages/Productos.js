import React from 'react'
import ItemListContainer from '../components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Productos = () => {
  return (
    <div className='item-list-container'>
        <div>
            <b>Catalogo de productos</b>
        </div>  
      <ItemListContainer></ItemListContainer>
    </div>
  )
}
