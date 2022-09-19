import React from 'react'
import CARRITO from '../assets/img/carrito.png'
import {useNavigate} from 'react-router-dom';

const CarritoIcon = ({CANT}) => {

  const navigate = useNavigate();
  function click(){
    navigate("/carrito");
  }

  return (
    <div>
        <button onClick={click} style={{marginLeft:20 , textDecoration: 'none',border:'none',background:'none'}}><img src={CARRITO} style={{height: 50, width: 50}}></img></button>
    </div>
  )
}

export default CarritoIcon