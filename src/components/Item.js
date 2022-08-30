import React from 'react'
import IMG from '../assets/img/filamento-gris.jpg'
import ItemCount from './ItemCount'


const Item = ({callBack}) => {
  return (
    <div className='item'>
        <div>
            FILAMENTO GRIS
        </div>
        <div className='itemImg'>
            <img  className="itemImg-img" src={IMG} alt="Imagen del Producto" />
        </div>
        <div>
          <ItemCount stock={5} initial={0} callBack={callBack}></ItemCount>
        </div>
    </div>
  )
}

export default Item