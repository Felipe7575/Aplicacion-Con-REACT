import {React,  useEffect , useState} from 'react'
import {useParams} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import{useContext} from 'react';
import {AppContext} from '../app/Provider';

import { getDetails } from '../api';
import ItemCount from '../components/ItemCount';

import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';

const ItemDetailsContainer = () => {
    
    const{addItem} = useContext(AppContext);
    const [cant, setCant] = useState(0);
    const {artId} = useParams();
    const [art, setART] = useState({});

    const navigate = useNavigate();
    const click= () => { addItem(art,cant); navigate('/carrito');}
    const onAdd = (cant) => { setCant(cant);}
    
    useEffect(() => {   
        getDetails(artId).then((res) => {     
            setART(res);
            });
        },[]);

        return ( 
 
                <div className='containerItemDetails'>
                    <div>
                    <Carousel variant="dark" className="d-block carouselImgDetails">
                        {art.img&&art.img.map((imagen,i=0)=>{i++; return(<Carousel.Item key={art.id+":"+i}><img  className="imgDetail" src={imagen} alt="Second slide"/></Carousel.Item>)})} 
                    </Carousel>
                    </div>
                    <div className="d-block itemDetails" >
                        <p className='item-title'>{art.name}</p>
                        <p className='item-description'>{art.description}</p>
                        <p className='StockItem'> Stock {art.stock}</p>
                        <p className='PrecioItem'> $ {art.precio} </p>
                        <p className='DescripcionItem'> {art.largeDescript}</p>
                        {cant===0? (
                            <ItemCount stock={art.stock} initial={0} onAdd={onAdd}></ItemCount>
                            ):(
                            <Button variant="outline-success" className="buttonAgregar" onClick={click}> COMPRAR </Button>
                            )               
                        }
                    </div>
                    
                </div>
  
        )
    
}
export default ItemDetailsContainer;
