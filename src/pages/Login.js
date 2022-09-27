import React, { useEffect } from 'react'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../app/firebase'
import { LoginItem } from '../components/LoginItem';
import { AppContext } from '../app/Provider';
import {useContext } from 'react';
import Swal from 'sweetalert2';
import  {useRef}  from 'react';
import {createItem,getItemById } from '../app/api'



 const Login = () => {

    const{ isComponentVisible,setIsComponentVisible, setLogueado} = useContext(AppContext);


    const ref = useRef(null);
    const handleClickOutside = (e) => {

        //Funcion que revisa si el click se hizo fuera del componente
        if (ref.current && !ref.current.contains(e.target)) {
             setIsComponentVisible(false);
        }
    }

    const awaitClick = () => {
        //Funcion que espera el click para ejecutar la funcion handleClickOutside
        setTimeout(() => {
            document.addEventListener("click", handleClickOutside);
        }, 0);
    };

    useEffect(() =>{ 
        awaitClick();
        return ()=>{document.removeEventListener('click', handleClickOutside); console.log('desmontado')}
    } );



    

    const register = (usuario)    => {
        createUserWithEmailAndPassword(auth,usuario.email,usuario.password)
            .then((userCredential) => { 
                createItem("USUARIO",(userCredential.user.uid),{email:usuario.email,userId:userCredential.user.uid,telefono:usuario.telefono,nombre:usuario.name,direccion:usuario.direccion});
                login(usuario);
            })
            .catch((error) => {
                Swal.fire('Eror al intentar crear el usuario',"Email o contraseña invalidas",'error');
            });
    }
    

    const login = (usuario)    => {
        console.log(usuario);
        signInWithEmailAndPassword(auth,usuario.email,usuario.password)
            .then((userCredential) => { 
                setIsComponentVisible(false);
                getItemById("USUARIO",userCredential.user.uid)
                    .then((doc) => {
                        setLogueado({email:doc.email, userId:doc.userId, name:doc.nombre, direccion:doc.direccion, telefono:doc.telefono});
                    });

            })
            .catch((error) => {
                Swal.fire('Eror al intentar iniciar sesión',"Email o contraseña invalidas",'error');
            });
    }

    console.log(isComponentVisible);

        return (
            <div ref={ref}>
                <LoginItem register={register} login={login}></LoginItem>
            </div>
        )
    }
    

export default Login;