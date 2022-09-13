import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import ItemCount from './ItemCount';
import Button from 'react-bootstrap/Button';
import { Link,  useNavigate} from 'react-router-dom';



const ItemDetails = ({id, name, description, stock,img=[], precio ,children}) => {
  const onAdd = (cant) => {
    console.log(cant);
  }
  const navigate = useNavigate();
  function click(){
    navigate("/carrito");
  }
  return (
    <div className='containerItemDetails'>
        <div>
          <Carousel variant="dark" className="d-block carouselImgDetails">
            {img.map((imagen,i=0)=>{i++; return(<Carousel.Item key={id+":"+i}><img  className="d-block w-100" src={imagen} alt="Second slide"/></Carousel.Item>)})}
          </Carousel>
        </div>
        <div className="d-block itemDetails" >
            <p className='item-title'>
              {name}
            </p>
            <p className='StockItem'> Stock {stock}</p>
            <p className='PrecioItem'> $ {precio} </p>
            <p className='DescripcionItem'> {children}</p>
            <div className="itemCountComprar">
              <ItemCount stock={stock} initial={0} onAdd={onAdd}></ItemCount>
              <Button variant="outline-success" className="buttonComprar" onClick={click}>COMPRAR</Button>
            </div>
        </div>
            

    </div>
  )
}
export default ItemDetails;

