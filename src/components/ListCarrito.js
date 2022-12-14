import React from 'react'
import Button from 'react-bootstrap/Button';



const ListCarrito = ({cart,remove}) => {
    const click = (id) => {
        remove(id);
    }

    return (
        <div>
        {cart.map((item) => {
            return (
                <div key={item.art.id} className='artCarrito'>
                    <img src={item.art.img[0]} alt="imagen del producto"></img>
                    <div> 
                        <p> {item.art.name} </p>
                        <p >{item.art.id}</p>
                    </div>
                    <p>{item.cantidad}</p>
                    {item.art.precioOferta>0?<p><b>$</b>{item.art.precioOferta}</p>:<p><b>$</b>{item.art.precio}</p>}
                    {item.art.precioOferta>0?<p ><b>$</b>{item.art.precioOferta*item.cantidad}</p>:<p><b>$</b>{item.art.precio*item.cantidad}</p>}
                    
                    <Button onClick={()=>click(item.art.id)}> X </Button>
                </div>
                );
                }
            )}
            
        </div>
        
    )

}

export default ListCarrito;
