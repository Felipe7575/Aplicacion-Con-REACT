import React from 'react'
import {useState} from 'react';



export const LoginItem = ({register,login}) => {

    const [registerSingin, setRegisterSingin] = useState(false);

    const [usuario, setUsuario] = useState({email:'',password:'', name:'', direccion:'', telefono:''});
    const changeContraseñaEmail = ({target:{id , value}})=>{
        setUsuario({...usuario,[id]:value});
    }
    
  return (
    <div className='loginItem'>
        <div className='registerLogin'>
            <button onClick={()=>setRegisterSingin(true)}>Registrarse</button>
            <button onClick={()=>setRegisterSingin(false)}>Iniciar sesión</button>
        </div>
        {registerSingin && <div className={`formInput`} > 
            <h1>Registrar</h1>
            <h2>Email</h2>
            <input type="email" id="email" placeholder="Email" onChange={changeContraseñaEmail} />
            <h2>Contraseña</h2>
            <input type="password" id="password" placeholder="Contraseña" onChange={changeContraseñaEmail}/>
            <h2>Nombre y Apellido</h2>
            <input type="text" id="name" placeholder="Nombre y Apellido" onChange={changeContraseñaEmail}/>
            <h2>Direccion</h2>
            <input type="text" id="direccion" placeholder="Direccion" onChange={changeContraseñaEmail}/>
            <h2>Telefono</h2>
            <input type="text" id="telefono" placeholder="Telefono" onChange={changeContraseñaEmail}/>
            <button onClick={()=>register(usuario)}>Registrar</button>
        </div>}
        {!registerSingin && <div className='formInput'> 
            <h1 className='loginLabel'>Iniciar sesión</h1>
            <h2>Email</h2>
            <input type="email" id="email" placeholder="Email" onChange={changeContraseñaEmail} />
            <h2>Contraseña</h2>
            <input type="password" id="password" placeholder="Contraseña" onChange={changeContraseñaEmail}/>
            <button onClick={()=>login(usuario)}>Ingresar</button>
        </div>}
    </div>
  )
}
