import React from 'react'
import {useState} from 'react';



export const LoginItem = ({register,login}) => {

    const [registerSingin, setRegisterSingin] = useState(true);

    const [usuario, setUsuario] = useState({email:'',password:''});
    const changeContraseñaEmail = ({target:{type , value}})=>{
        setUsuario({...usuario,[type]:value});
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
            <input type="email" placeholder="Email" onChange={changeContraseñaEmail} />
            <h2>Contraseña</h2>
            <input type="password" placeholder="Contraseña" onChange={changeContraseñaEmail}/>
            <button onClick={()=>register(usuario)}>Registrar</button>
        </div>}
        {!registerSingin && <div className='formInput'> 
            <h1 className='loginLabel'>Iniciar sesión</h1>
            <h2>Email</h2>
            <input type="email" placeholder="Email" onChange={changeContraseñaEmail} />
            <h2>Contraseña</h2>
            <input type="password" placeholder="Contraseña" onChange={changeContraseñaEmail}/>
            <button onClick={()=>login(usuario)}>Ingresar</button>
        </div>}
    </div>
  )
}
