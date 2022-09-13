import React from 'react'
import { useState } from 'react'
import Button from 'react-bootstrap/Button';

const ItemCount = ({stock,initial=0,onAdd}) => {
  const [cant, setCant] = useState(initial);
  return (
    <div className='container-count'>
        <div>
            <Button variant="outline-success" 
                                onClick={()=>{
                                    if(cant>0)
                                    setCant(cant-1);
                                }
                                }
                            >-</Button> 
                {  cant  }
            <Button variant="outline-success" 
                            onClick={()=>{
                                if(cant<stock)
                                    setCant(cant+1);
                                }
                            }
                        >+</Button> 
        </div>
        
        <Button variant="outline-success"
                        onClick={()=>{
                                onAdd(cant);
                                setCant(0);
                                
                            }
                         }
                    >AGREGAR AL CARRITO </Button>
    </div>
  )
}
export default ItemCount;