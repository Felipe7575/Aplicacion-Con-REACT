import React from 'react'
import CARRITO from '../assets/img/carrito.png'
import {useNavigate} from 'react-router-dom';



const CarritoIcon = ({CANT}) => {

  const navigate = useNavigate();
  function click(){
    navigate("/carrito");
  }

  return (
    <div className='icon' style={{display:'flex', fontSize:'20px',fontWeight:500,alignItem:'center'}} >
        <button onClick={click} style={{marginLeft:20 , textDecoration: 'none',border:'none',background:'none'}}><img src={CARRITO} style={{height: 50, width: 50}}></img></button>
        {CANT>0 && <div className='carritoIconCant'>{CANT}</div>}
    </div>
  )
}

export default CarritoIcon