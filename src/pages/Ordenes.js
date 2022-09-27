import React, { useEffect } from 'react'
import {getItemsByCondition, getArrayFromCollection} from '../app/api'
import { Button } from 'react-bootstrap';
import carritoVacio from '../assets/img/carrito-de-compras.png';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../app/Provider';
import { useState, useContext } from 'react';


export const Ordenes = () => {
    const {logueado} = useContext(AppContext);
    const [order, setOrder] = useState([]);
    const navigate = useNavigate();
    const click= () => {navigate('/productos/0');}
    
    
    useEffect(() => {
        getItemsByCondition("ORDERS","email",logueado.email)
        .then((data) => {
            setOrder(data);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);


    
    
    

    if(!(order.lenght==0)){
            console.log(order);
            return(
                <div className="orderList">
                    {order.map((item) => {
                        return(
                        <div className="orden" id={item.id}>
                            <h3>Orden Email: {item.email}</h3>
                            <h3>Orden N°: {item.id}</h3>
                            <h4>Estado: {item.estado}</h4>
                            <h4>Total: ${item.total}</h4>
                        </div>);
                    })}
                </div>
            );
        }
        else{
            return (
                <div className='carritoVacio '>
                    <div>
                        <p>No tiene ordenes pendientes.</p>
                        <p>¡Comience explorando nuestra tienda de productos!</p>
                        <Button onClick={click}> SEGUIR COMPRANDO </Button>
                    </div>
                    <img src={carritoVacio} alt="carrito vacio"></img>
                </div>
            );
        }
   
  
}
