import React, { useState } from 'react';
import { UsersCollection } from '../../api/UserCollection';
import { useHistory } from 'react-router-dom';
import { Container, Grid, TextField, Button } from '@material-ui/core';


const NewAccount = () => {

    const history = useHistory();

    const [ alerta, setAlerta ] = useState(false);
    const [ newUser, setNewUser ] = useState({
        nombre: '',
        email: '', 
        password: ''
    })

    const { email, password, nombre } = newUser;

    const onChange = e => {
        setNewUser({
            ...newUser,
            [e.target.name] : e.target.value
        })
    }

   const onSubmit = e => {
        e.preventDefault();
        if(email.trim() === '' || password.trim() === ''){
            console.log('Todos los campos son obligatorios');
            return
        }

        history.push('/todo-list');
   }

    return (  
        <main className="containerLogin">
            <form
                className="login"
                onSubmit={onSubmit}
            >   

                <h1>Nueva Cuenta</h1>
                <TextField value={nombre} name="nombre" onChange={onChange} label="Nombre" variant="outlined"/>
                <TextField value={email} name="email" onChange={onChange} label="Email" variant="outlined"/>
                <TextField value={password} name="password" onChange={onChange} label="Password" variant="outlined"/>
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