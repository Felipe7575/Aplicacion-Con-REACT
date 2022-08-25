import React from 'react'
import CARRITO from '../assets/img/carrito.png'

const CarritoIcon = ({CANT}) => {
  return (
    <div>
        <a href="#" style={{paddingLeft:20 , textDecoration: 'none'}}><img src={CARRITO} style={{height: 50, width: 50}}></img> {CANT} </a>
    </div>
  )
}

export default CarritoIcon