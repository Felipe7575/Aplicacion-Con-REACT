import JustifiedExample from "./components/NavBar";
import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import CarritoIcon from "./components/CarritoIcon";
import ItemListContainer from "./components/ItemListContainer";


function App() {
  
  return (
    <div >
        <NavBar>
           <CarritoIcon CANT={5}/>
        </NavBar>
        <ItemListContainer></ItemListContainer>
    </div>
  );
}

export default App;
