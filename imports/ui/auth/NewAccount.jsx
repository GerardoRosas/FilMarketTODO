import React, { useState } from 'react';
import { UsersCollection } from '../../api/UserCollection';
import { useHistory } from 'react-router-dom';
import { Container, Grid, TextField, Button } from '@material-ui/core';



import { Accounts } from 'meteor/accounts-base';


const NewAccount = () => {

    const history = useHistory();

    const [ error, setError ] = useState(false);
    const [ msg, setMsg ] = useState('false');
    const [ newUser, setNewUser ] = useState({
        nombre: '',
        password: '',
        confirmPass: '',
    })

    const { password, nombre, confirmPass } = newUser;

    const onChange = e => {
        setNewUser({
            ...newUser,
            [e.target.name] : e.target.value
        })
    }

   const onSubmit = async e => {
        e.preventDefault();

        //Validar que no haya campos vacios
        if(nombre.trim() === '' || password.trim() === '' || confirmPass.trim() === ''){
            setError(true);
            setMsg('Todos los campos son obligatorios');
            
        }else if(password.length < 6 && confirmPass.length < 6){
            setError(true);
            setMsg('El password debe ser al menos 6 caracteres');
            
        }else if(password !== confirmPass){
            setError(true);
            setMsg('Passwords diferentes, verifica que sean iguales');
            
        }else{
            console.log('Enviando info');
            try {
                // await Accounts.createUser({
                //     username: nombre,
                //     password: password,
                // }); 

                //Hasheamos el password
                // const salt = await bcrypt.genSalt(10);
                // password = await bcrypt.hash(password, salt);
                // console.log(password);

                //bcrypt no es soportado en navegadores
    
                await UsersCollection.insert({
                    nombre: nombre,
                    password: password,
                    createdAt: Date.now(),
                })
                history.push('/login');

            } catch (error) {
                console.log(error);
            }

            //Reinciar el form
            setNewUser({
                nombre: '',
                password: '',
                confirmPass: ''
            })
        }

        setTimeout(() => {
            setError(false);
        }, 3000)
        
        
    }

    return (  
        <main className="containerLogin">
            <form
                className="login"
                onSubmit={onSubmit}
            >   

                <h1>Nueva Cuenta</h1>
                {error ? (
                    <div className="error2">
                        <p>{msg}</p>
                    </div>
                ) : null}
                <TextField value={nombre} name="nombre" onChange={onChange} label="User Name" variant="outlined"/>
                <TextField value={password} name="password" type="password" onChange={onChange} label="Password" variant="outlined"/>
                <TextField value={confirmPass} name="confirmPass" type="password" onChange={onChange} label="Plaese confirm Password" variant="outlined"/> 
                <input 
                    type="submit"
                    value="Sign In"
                    className="loginSubmit"
                />

            </form>
            

        </main>

    );
}
 
export default NewAccount;