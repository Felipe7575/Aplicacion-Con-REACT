import{React,useContext,useState,useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import ItemCarrito from '../components/ItemCarrito';
import { AppContext } from '../app/Provider';





const Carrito = () => {
  
  const{cart,removeItem,clear} = useContext(AppContext);
  const [total, setTotal] = useState(0);


  useEffect(() => {
    let sum = 0;
    cart.forEach((item) => {
      sum += item.art.precio * item.cantidad;
    });
    setTotal(sum);
  }, []);


  
  return (

    <div className='carritoList'>
      <Button onClick={clear}> BORRAR CARRITO </Button>

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
          

    </div>
  )
}

export default Carrito;
