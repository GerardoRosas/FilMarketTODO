import React, { useState } from 'react';
import { UsersCollection } from '../../api/UserCollection';
import { useHistory } from 'react-router-dom';
import { Container, Grid, TextField, Button } from '@material-ui/core';

import { Accounts } from 'meteor/accounts-base';


const NewAccount = () => {

    const history = useHistory();

    const [ error, setError ] = useState(false);
    const [ newUser, setNewUser ] = useState({
        nombre: '',
        password: ''
    })

    const { password, nombre } = newUser;

    const onChange = e => {
        setNewUser({
            ...newUser,
            [e.target.name] : e.target.value
        })
    }

   const onSubmit = async e => {
        e.preventDefault();
        if(nombre.trim() === '' || password.trim() === ''){
            setError(true);
        }

        setTimeout(() => {
            setError(false);
        }, 3000)

        try {
            // await Accounts.createUser({
            //     username: nombre,
            //     password: password,
            // }); 
        } catch (error) {
            console.log(error);
        }
        
        //history.push('/login');
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
                        <p>Todos los campos son obligatorios</p>
                    </div>
                ) : null}
                <TextField value={nombre} name="nombre" onChange={onChange} label="User Name" variant="outlined"/>
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