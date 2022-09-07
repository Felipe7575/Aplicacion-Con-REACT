import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import IMG from '../assets/img/img'
import ItemCount from './ItemCount';

const ItemDetails = ({callBack}) => {
  return (
    <div className='containerItemDetails'>
        <Carousel variant="dark" className="d-block carouselImgDetails">
          <Carousel.Item>
            <img className="d-block w-100" src={IMG[1]} alt="Second slide"/>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={IMG[2]} alt="Second slide"/>      
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={IMG[3]} alt="Second slide"/> 
          </Carousel.Item> 
        </Carousel>
        <div className="d-block itemDetails" >
            <p className='NombreItem'>
              Filamento 3d 1,75 mm PLA 1kg
            </p>
            <p className='StockItem'> Stock 2 </p>
            <p className='PrecioItem'> $ 1000 </p>
            <p className='DescripcionItem'> Descripcion: uevo XPLA 850
              
                Mayor resistencia al impacto y mayor resistencia al calor

                Este nuevo biopolímero mantiene las propiedades de impresión de un PLA común, mejorando su calidad post impresión teniendo así mayor resistencia al impacto que un ABS y 7 veces más que un PLA común, resistiendo temperaturas de hasta 85°C

                Temperatura de impresión:
                Pico: 190-230°C
                Cama: 50-70°C
                Temperatura de recocción: 80-130°C</p>
            <ItemCount stock={2} initial={0} callBack={callBack}></ItemCount>
        </div>
            

    </div>
  )
}
export default ItemDetails;
