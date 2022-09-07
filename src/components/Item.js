import React from 'react'
import ItemCount from './ItemCount'


const Item = ({callBack, id,stock, name,image}) => {
  return (
    <div className='item'>
        <div>
            <p className='item-title'>{name}</p>
        </div>
        <div className='itemImg'>
            <img  className="itemImg-img" src={image} alt="Imagen del Producto" />
        </div>
        <div>
          <p className="item-description">{}</p>
          <p>Stock: {}</p> 
          <ItemCount stock={stock} initial={0} callBack={callBack}></ItemCount>
        </div>
    </div>
  )
}

export default Item