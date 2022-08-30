import JustifiedExample from "./components/NavBar";
import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import CarritoIcon from "./components/CarritoIcon";
import ItemListContainer from "./components/ItemListContainer";
import { useState } from "react";


function App() {
  const [CARRITO, setCARRITO] = useState(0);
  const onAdd = (CANT) => {
    setCARRITO(CARRITO + CANT);
  };
  return (
    <div >
        <NavBar>
           <CarritoIcon CANT={CARRITO}/>
        </NavBar>
        <ItemListContainer callBack={onAdd}></ItemListContainer>
    </div>
  );
}

export default App;
