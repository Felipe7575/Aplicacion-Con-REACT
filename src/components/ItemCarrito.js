import React from 'react'
import Button from 'react-bootstrap/Button';



const ItemCarrito = ({cart,remove}) => {
    const click = (id) => {
        remove(id);
    }

    return (
        <div>
        {cart.map((item) => {
            return (
                <div key={item.art.id} className='artCarrito'>
                    <img src={item.art.img[0]}></img>
                    <div> 
                        <p> {item.art.name} </p>
                        <p >{item.art.id}</p>
                    </div>
                    <p>{item.cantidad}</p>
                    <p ><b>$</b>{item.art.precio}</p>
                    <p ><b>$</b>{item.art.precio*item.cantidad}</p>
                    <Button onClick={()=>click(item.art.id)}> X </Button>
                </div>
                );
                }
            )}
            
        </div>
        
    )

}

export default ItemCarrito;
