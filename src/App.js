import JustifiedExample from "./components/NavBar";
import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import CarritoIcon from "./components/CarritoIcon";
import ItemListContainer from "./components/ItemListContainer";
import { useState } from "react";
import ItemDetails from "./components/ItemDetails";


function App() {
  const [carrito, setCARRITO] = useState(0);
  const onAdd = (CANT) => {
    setCARRITO(carrito + CANT);
  };
  return (
    <div >
        <NavBar>
           <CarritoIcon CANT={carrito}/>
        </NavBar>
        <ItemListContainer callBack={onAdd}></ItemListContainer>

        <ItemDetails callBack={onAdd}> </ItemDetails>
    </div>
  );
}

export default App;
