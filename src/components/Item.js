import React from 'react'
import {useNavigate} from 'react-router-dom';
import logoOferta from '../assets/img/oferta.png';
import logoSinStock from '../assets/img/sin_stock.png';




const Item = ({id,stock, name,image, precio, precioOferta}) => {
  
  const navigate = useNavigate();
  function abrirItem(){
    navigate("/itemDetailsContainer/"+id);
  }
  
  return (
    <div className='item'>
        
        <div className='itemImg' onClick={abrirItem}>
            <img className="itemImg-img" src={image} alt="Imagen del Producto" />
        </div>

        <div className="cartel">
            {(precioOferta>0 && stock>0) &&
                    <img className="" src={logoOferta} alt="Oferta" />

                }
            {stock === 0 &&           
                    <img className="" src={logoSinStock} alt="Sin Stock" />              
                }
        </div>

        <div className='item-data'>

            <div>
                <p className='item-title' onClick={abrirItem}>{name}</p>
            </div>
            <p className="item-description">{}</p>

            <div className='precioStock'>      
              {(precioOferta>0 && stock>0)?
                <div className='priceDiv'>
                  <p className="item-price"><b>$</b>{precioOferta}</p>
                  <p className="item-priceOferta"><b>$</b>{precio}</p>
                </div>  :
                <p className="item-price"><b>$</b>{precio}</p>
              }
              
              <p className="item-stock">Stock: {stock}</p> 
            </div>
            
            
        </div>
            
    </div>
  )
}

export default Item