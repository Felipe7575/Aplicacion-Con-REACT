import React from 'react'
import IMG from '../assets/img/filamento-gris.jpg'



const Item = () => {
  return (
    <div className='item'>
        <div>
            FILAMENTO GRIS
        </div>
        <div className='itemImg'>
            <img  className="itemImg-img" src={IMG} alt="Imagen del Producto" />
        </div>
    </div>
  )
}

export default Item