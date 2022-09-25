import React, { useEffect } from 'react'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../app/firebase'
import { LoginItem } from '../components/LoginItem';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../app/Provider';
import {useContext } from 'react';
import Swal from 'sweetalert2';
import  {useRef}  from 'react';



 const Login = () => {

    const{ isComponentVisible,setIsComponentVisible, setLogueado} = useContext(AppContext);
    const navigate = useNavigate();

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
                console.log('Usuario creado',userCredential.user);
            })
            .catch((error) => {
                console.log('Error',error.message);
                Swal.fire('Eror al intentar crear el usuario',"Email o contraseña invalidas",'error');
            });
    }
    

    const login = (usuario)    => {
        signInWithEmailAndPassword(auth,usuario.email,usuario.password)
            .then((userCredential) => { 
                setLogueado({email:usuario.email,password:usuario.password});
                console.log('Usuario logueado',userCredential.user);
                navigate("/");
            })
            .catch((error) => {
                console.log('Error',error.message);
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