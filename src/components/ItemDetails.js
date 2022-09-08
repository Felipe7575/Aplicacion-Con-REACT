import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import IMG from '../assets/img/img'
import ItemCount from './ItemCount';
class articulo {
  constructor(id,name,description,stock) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.stock = stock;
  }

}


const ItemDetails = ({callBack ,id, name, description, stock, children}) => {
  return (

    <div className='containerItemDetails'>
        <Carousel variant="dark" className="d-block carouselImgDetails">
          <Carousel.Item>
            <img className="d-block w-100" src={IMG["MLA841844723"]} alt="Second slide"/>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={IMG["MLA841844723"]} alt="Second slide"/>      
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={IMG["MLA841844723"]} alt="Second slide"/> 
          </Carousel.Item> 
        </Carousel>
        <div className="d-block itemDetails" >
            <p className='NombreItem'>
              {name}
            </p>
            <p className='StockItem'> Stock {stock}</p>
            <p className='PrecioItem'> $ 1000 </p>
            <p className='DescripcionItem'> {children}</p>
            <ItemCount stock={2} initial={0} callBack={callBack}></ItemCount>
        </div>
            

    </div>
  )
}
export default ItemDetails;
