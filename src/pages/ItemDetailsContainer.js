import React, { useEffect } from 'react'
import { useState } from "react";
import { getDetails } from '../api';
import {useParams} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { Link,  useNavigate} from 'react-router-dom';
import ItemCount from '../components/ItemCount';
import Carousel from 'react-bootstrap/Carousel';


const ItemDetailsContainer = () => {

    const navigate = useNavigate();
    function click(){
        navigate("/carrito");
      }

    const [cant, setCant] = useState(false);
    
    const onAdd = (cant) => {
        setCant(cant);
      }

    const {artId} = useParams();

    const [art, setART] = useState({});

    useEffect(() => {   
        getDetails(artId).then((res) => {     
            setART(res);
        });
    }, []);

        return ( 
 
                <div className='containerItemDetails'>
                    <div>
                    <Carousel variant="dark" className="d-block carouselImgDetails">
                        {art.img&&art.img.map((imagen,i=0)=>{i++; return(<Carousel.Item key={art.id+":"+i}><img  className="d-block w-100" src={imagen} alt="Second slide"/></Carousel.Item>)})} 
                    </Carousel>
                    </div>
                    <div className="d-block itemDetails" >
                        <p className='item-title'>{art.name}</p>
                        <p className='item-description'>{art.description}</p>
                        <p className='StockItem'> Stock {art.stock}</p>
                        <p className='PrecioItem'> $ {art.precio} </p>
                        <p className='DescripcionItem'> {art.largeDescript}</p>
                        {cant==0? (
                            <ItemCount stock={art.stock} initial={0} onAdd={onAdd}></ItemCount>
                            ):(
                            <Button variant="outline-success" className="buttonAgregar"><Link  className="buttonAgregar" to = {`/carrito`}> COMPRAR </Link></Button>
                            )               
                        }
                    </div>
                    
                </div>
  
        )
    
}
export default ItemDetailsContainer;
