import React from 'react'
import {useNavigate} from 'react-router-dom';


const Footer = () => {
   const navigate = useNavigate();
  const click= (dir) => {navigate(dir);}
  return (
    <div className='containerPie'>
        <footer className="pie"> 
            <div className="pie_legales">
                <div>
                    <h2>Sobre Todo 3D Ramos</h2>
                    <p>Cursos online de Diseño 3D e Impresión 3D ¡Bienvenidos a vuestra área de impresión!</p>  
                </div>
                    <div>
                        <p>Derechos Reservados - Todo3dRamos</p>

                </div>
            </div>
            <div class="pie_redes">
                <h2>Redes Sociales Todo3dRamos</h2>
                <p>Puedes encontrarnos en nuestro canal de Youtube y otras redes sociales ¡síguenos para estar al día de novedades y promociones en la academia!</p>
                <div Name="pie_redes__links"> 
                    <a className="botton botton--foto  botton--inicio" onClick={()=>click("/")}>ab\</a> 
                    <a className="botton botton--foto  botton--instagram" target="_blank" href="https://www.instagram.com/todo_3d_ramos/">ab\</a> 
                    <a className="botton botton--foto  botton--facebook" target="_blank" href="https://web.whatsapp.com/">ab\</a> 
                </div>      
            </div>    
        </footer> 
    </div>
  )
}
export default Footer;