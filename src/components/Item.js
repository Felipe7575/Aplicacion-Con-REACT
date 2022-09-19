import React from 'react'
import {useNavigate} from 'react-router-dom';




const Item = ({id,stock, name,image, precio}) => {
  
  const navigate = useNavigate();
  function abrirItem(){
    navigate("/itemDetailsContainer/"+id);
  }
  
  return (
    <div className='item'>
        
        <div className='itemImg' onClick={abrirItem}>
            <img className="itemImg-img" src={image} alt="Imagen del Producto" />
        </div>
        <div className='item-data'>
            <div>
                <p className='item-title' onClick={abrirItem}>{name}</p>
            </div>
            <div className='precioStock'>
              <p className="item-description">{}</p>
              <p className="item-price"><b>$</b>{precio}</p>
              <p className="item-stock">Stock: {stock}</p> 
            </div>
            
            
        </div>
            
    </div>
  )
}

export default Item