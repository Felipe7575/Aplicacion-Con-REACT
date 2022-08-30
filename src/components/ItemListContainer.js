import React from 'react'
import Item from './Item'



const ItemListContainer = ({callBack}) => {
  return (
    <div className='list-container'>
        <div>
            OFERTAS DE LA SEMANA
        </div>
        <div>
            <Item callBack={callBack}></Item>
        </div>
    </div>
  )
}

export default ItemListContainer;