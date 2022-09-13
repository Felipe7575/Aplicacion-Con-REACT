import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "../components/ItemListContainer";


const Home = () => {
    return (
      <div className='item-list-container'>
          <div>
            <b>OFERTAS DE LA SEMANA</b>
          </div>          
          <ItemListContainer></ItemListContainer>       
      </div>
    );
}

export default Home;




