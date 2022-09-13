import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "../components/ItemListContainer";


const Home = () => {
    return (
      <div >
          <div>
            OFERTAS DE LA SEMANA
          </div>          
          <ItemListContainer></ItemListContainer>       
      </div>
    );
}

export default Home;




