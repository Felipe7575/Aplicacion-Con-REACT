import React from 'react'
import IMG from '../assets/img/filamento-gris.jpg'
import ItemCount from './ItemCount'


const Item = ({callBack, id, name, description,stock,image}) => {
  return (
    <div className='item'>
        <div>
            <p className='item-title'>{name}</p>
        </div>
        <div className='itemImg'>
            <img  className="itemImg-img" src={image} alt="Imagen del Producto" />
        </div>
        <div>
          <p className="item-description">{description}</p>
          <p>Stock: {stock}</p> 
          <ItemCount stock={stock} initial={0} callBack={callBack}></ItemCount>
        </div>
    </div>
  )
}

export default Item