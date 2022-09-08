import React, { useEffect } from 'react'
import { useState } from "react";
import ItemDetails from './ItemDetails';
import { getDetails } from '../api';


const ItemDetailsContainer = ({onAdd}) => {
    const [art, setART] = useState(0);
    useEffect(() =>{
        getDetails().then((res) => {
            setART(res[0]);
            console.log(res[0]);
        });
    },[]);
    
    return (  
    <div>
        <ItemDetails callBack={onAdd} id={art.id} name={art.name} description={art.description} stock={art.stock} > 
                    {art.largeDescript}
              </ItemDetails>
    </div>
  )
}
export default ItemDetailsContainer;
