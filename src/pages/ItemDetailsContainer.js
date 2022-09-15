import React, { useEffect } from 'react'
import { useState } from "react";
import ItemDetails from '../components/ItemDetails';
import { getDetails } from '../api';
import {useParams} from 'react-router-dom';


const ItemDetailsContainer = () => {
    const {artId} = useParams();
    
    const [art, setART] = useState(0);

    useEffect(() => {   
        getDetails(artId).then((res) => {     
            setART(res);
        });
    }, []);

    useEffect(() =>{
       
    },[]);
    
    return (  
    <div>
        <ItemDetails  id={art.id} name={art.name} description={art.description} stock={art.stock} img={art.img} precio={art.precio} > 
                    {art.largeDescript}
              </ItemDetails>
    </div>
  )
}
export default ItemDetailsContainer;
