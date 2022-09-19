import{React,useContext,useState,useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import ItemCarrito from '../components/ItemCarrito';
import { AppContext } from '../app/Provider';
import { useNavigate } from 'react-router-dom';





const Carrito = () => {
  
  const{cart,removeItem,clear} = useContext(AppContext);
  const [total, setTotal] = useState(0);


  useEffect(() => {
    let sum = 0;
    cart.forEach((item) => {
      sum += item.art.precio * item.cantidad;
    });
    setTotal(sum);
  }, [cart]);

    const navigate = useNavigate();
    const click= () => {navigate('/productos/0');}
  
  return (

    <div className='carritoList'>
            <div className='carritoTable'>
              <p>Producto</p>
              <p>Cantidad</p>
              <p>Precio unitario</p>
              <p>Precio</p>
            </div>

          <ItemCarrito cart={cart} remove={removeItem} ></ItemCarrito>

          <div className='carritoTable'>
              <p>Total</p>
              <p>{total}</p>
              
          </div>

        <div className='botoneraCarrito'>
            <Button onClick={click}> SEGUIR COMPRANDO </Button>
            <Button onClick={clear}> BORRAR CARRITO </Button>
            <Button > FINALIZAR COMPRA </Button>
        </div>  
        
    </div>
  )
}

export default Carrito;
