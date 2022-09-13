import React from 'react'
import ItemCount from './ItemCount'
import Button from 'react-bootstrap/Button';
import { Link,  useNavigate} from 'react-router-dom';




const Item = ({callBack, id,stock, name,image, precio}) => {
  
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
            <div>
              <Button className=""><Link  className="buttonAgregar" to = {`/carrito`}> COMPRAR </Link></Button>
            </div>
            
        </div>
            
    </div>
  )
}

export default Item