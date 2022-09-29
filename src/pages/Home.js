import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "../pages/ItemListContainer";


const Home = () => {
    return (
      <div className='item-list-container container-general'>
          <div>
            <b>OFERTAS DE LA SEMANA</b>
          </div>          
          <ItemListContainer></ItemListContainer>       
      </div>
    );
}

export default Home;




