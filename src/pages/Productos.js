import React from 'react'
import ItemListContainer from '../components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Productos = () => {
  return (
    <div>
        <div>
            Catalogo de productos
        </div>  
      <ItemListContainer></ItemListContainer>
    </div>
  )
}
