import React from 'react'
import { useState } from 'react'
import Button from 'react-bootstrap/Button';

const ItemCount = ({stock,initial=0, callBack}) => {
  const [CANT, setCant] = useState(initial);
  return (
    <>
        <div>
            <Button variant="outline-success" 
                                onClick={()=>{
                                    if(CANT>0)
                                    setCant(CANT-1);
                                }
                                }
                            >-</Button> 
                {  CANT  }
            <Button variant="outline-success" 
                            onClick={()=>{
                                if(CANT<stock)
                                    setCant(CANT+1);
                                }
                            }
                        >+</Button> 
        </div>
        
        <Button variant="outline-success"
                        onClick={()=>{
                                callBack(CANT);
                                setCant(0);
                            }
                         }
                    >AGREGAR</Button>
    </>
  )
}
export default ItemCount;