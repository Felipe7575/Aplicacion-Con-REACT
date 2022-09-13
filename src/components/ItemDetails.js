import React from 'react'
import Carousel from 'react-bootstrap/Carousel';



const ItemDetails = ({id, name, description, stock,img=[], precio ,children}) => {
  return (

    <div className='containerItemDetails'>
        <Carousel variant="dark" className="d-block carouselImgDetails">
          {img.map((imagen,i=0)=>{i++; return(<Carousel.Item key={id+":"+i}><img  className="d-block w-100" src={imagen} alt="Second slide"/></Carousel.Item>)})}
        </Carousel>
        <div className="d-block itemDetails" >
            <p className='NombreItem'>
              {name}
            </p>
            <p className='StockItem'> Stock {stock}</p>
            <p className='PrecioItem'> $ {precio} </p>
            <p className='DescripcionItem'> {children}</p>
            
        </div>
            

    </div>
  )
}
export default ItemDetails;

