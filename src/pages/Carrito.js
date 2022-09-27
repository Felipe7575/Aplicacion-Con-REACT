import{useContext,useState,useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import ListCarrito from '../components/ListCarrito';
import { AppContext } from '../app/Provider';
import { useNavigate } from 'react-router-dom';
import carritoVacio from '../assets/img/carrito-de-compras.png';
import {createItem} from '../app/api'





const Carrito = () => {
  
  const{cart,removeItem,clear, logueado, setIsComponentVisible} = useContext(AppContext);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    let sum = 0;
    cart.forEach((item) => {
      if(item.art.precioOferta>0){
        sum += item.art.precioOferta*item.cantidad;
      }
      else{
        sum += item.art.precio * item.cantidad;
      }
    });
    setTotal(sum);
  }, [cart]);

    const navigate = useNavigate();
    const click= () => {navigate('/productos/0');}
    const finalizar = (email, password) => {
      if(email===''){
        setIsComponentVisible(true)
      }else{
        if(cart.length!==0){
          const items=[];
          cart.forEach((item) => {
            items.push({art:item.art.id,name:item.art.name,cantidad:item.cantidad});
            });
          
        const order = {
          direccion: logueado.direccion,
          email: logueado.email,
          nombre: logueado.name,
          telefono: logueado.telefono,
          items: items,
          total: total,
          estado: "pendiente",

          }
          createItem("ORDERS","0",order);
          clear();
        }
      }
      
    }

    //===============================================================================
    //Lista de carrito
        const carritoList = () => {
          return(
            <div className='carritoList'>
                  <div className='carritoTable'>
                    <p>Producto</p>
                    <p>Cantidad</p>
                    <p>Precio unitario</p>
                    <p>Precio</p>
                  </div>
                
                <ListCarrito cart={cart} remove={removeItem} ></ListCarrito>

                <div className='carritoTable'>
                    <p>Total</p>
                    <p>{total}</p>
                    
                </div>

              <div className='botoneraCarrito'>
                  <Button onClick={click}> SEGUIR COMPRANDO </Button>
                  <Button onClick={clear}> BORRAR CARRITO </Button>
                  <Button onClick={()=>finalizar(logueado.email, logueado.password)}> FINALIZAR COMPRA </Button>
              </div>  
              
            </div>
          );
        };
    //===============================================================================

 
  if(cart.length>0){
    return(
      carritoList()
    )
    
  }
  else{
  return (
    <div className='carritoVacio '>
      <div>
        <p>Su carrito de compras está vacío.</p>
        <p>¡Comience explorando nuestra tienda de productos!</p>
        <Button onClick={click}> SEGUIR COMPRANDO </Button>
      </div>
      <img src={carritoVacio} alt="carrito vacio"></img>

    </div>
  );}
}




export default Carrito;



