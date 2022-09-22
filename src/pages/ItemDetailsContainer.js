import {useEffect , useState} from 'react'
import {useParams} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import{useContext} from 'react';
import {AppContext} from '../app/Provider';


import ItemCount from '../components/ItemCount';

import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';

import logoSinStock from '../assets/img/sin_stock.png';
import logoOferta from '../assets/img/oferta.png';

import {getItemById} from '../app/api';

const ItemDetailsContainer = () => {
    
    const{addItem} = useContext(AppContext);
    const [cant, setCant] = useState(0);
    const {artId} = useParams();
    const [art, setART] = useState({});

    const navigate = useNavigate();

    const click= () => {navigate('/carrito');}
    
    const onAdd = (cant) => { setCant(cant); addItem(art,cant)}
    
    useEffect(() => {   
        getItemById("ARTICULOS",artId).then((res) => {
            setART(res);
        });

        },[]);

        return ( 
            <div className='background'>
                <div className='containerItemDetails'>
                    <div>
                        <Carousel variant="dark" className="d-block carouselImgDetails">
                            {art.img&&art.img.map((imagen,i=0)=>{i++; return(<Carousel.Item key={art.id+":"+i}><img  className="imgDetail" src={imagen} alt="Second slide"/></Carousel.Item>)})} 
                        </Carousel>
                    </div>
                    <div className="d-block itemDetails" >
                        <div className="cartel">
                            {(art.precioOferta>0 && art.stock>0) &&
                                    <img className="" src={logoOferta} alt="Oferta" />

                                }
                            {art.stock === 0 &&           
                                    <img className="" src={logoSinStock} alt="Sin Stock" />              
                                }
                        </div>
                        <p className='item-title'>{art.name}</p>
                        <p className='item-description'>{art.description}</p>
                        <p className='StockItem'> Stock {art.stock}</p>

                        {(art.precioOferta>0 && art.stock>0)?
                            <div className='priceDiv'>
                            <p className="item-price"><b>$</b>{art.precioOferta}</p>
                            <p className="item-priceOferta"><b>$</b>{art.precio}</p>
                            </div>  :
                            <p className="item-price"><b>$</b>{art.precio}</p>
                        }
                        <p className='DescripcionItem'> {art.largeDescript}</p>
                        {cant===0? (
                            <ItemCount stock={art.stock} initial={0} onAdd={onAdd}></ItemCount>
                            ):(
                            <Button variant="outline-success" className="buttonAgregar" onClick={click}> FINALIZAR COMPRA </Button>
                            )               
                        }
                    </div>
                    
                </div>
            </div>   
        )
    
}
export default ItemDetailsContainer;
