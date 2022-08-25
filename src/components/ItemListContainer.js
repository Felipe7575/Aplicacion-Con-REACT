import React from 'react'
import Item from './Item'



const ItemListContainer = () => {
  return (
    <div className='list-container'>
        <div>
            OFERTAS DE LA SEMANA
        </div>
        <div>
            <Item></Item>
        </div>
    </div>
  )
}

export default ItemListContainer