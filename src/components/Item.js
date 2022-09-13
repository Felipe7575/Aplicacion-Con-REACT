import React from 'react'
import ItemCount from './ItemCount'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';



const Item = ({callBack, id,stock, name,image, precio}) => {
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
          <p className="item-price">${precio}</p>
          <p>Stock: {stock}</p> 
          <ItemCount stock={stock} initial={0}></ItemCount>
          <Button className="buttonAgregar"><Link  className="buttonAgregar" to = {`/itemDetailsContainer/${id}`}> DETALLES </Link></Button>{' '}
        </div>
    </div>
  )
}

export default Item