import React, { useState, useEffect } from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Grid, TextField, Button } from '@material-ui/core';
import { useHistory, Link } from 'react-router-dom';

import { useTracker } from 'meteor/react-meteor-data';
import { Accounts } from 'meteor/accounts-base';


const Login = () => {

    // const userAlpha = useTracker(() => Meteor.user());
    // console.log(userAlpha);

    //Consultando la BD
    useEffect(() => {

    }, [])

    const history = useHistory();

    const [ alerta, setAlerta ] = useState(false);
    const [ user, setUser ] = useState({
        userName: '', 
        password: ''
    })

    const { userName, password } = user;

    const onChange = e => {
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }

   const onSubmit = e => {
        e.preventDefault();
        if(userName.trim() === '' || password.trim() === ''){
            console.log('Todos los campos son obligatorios');
            return
        }

        

        Meteor.loginWithPassword(userName, password);

        history.push('/todo-list');
   }

    return (    
        <main className="containerLogin">
            <form
                className="login"
                onSubmit={onSubmit}
            >   

                <div className="">
                    <h1>Login</h1>
                </div>
                <TextField value={userName} name="userName" onChange={onChange} label="User Name" variant="outlined"/>
                <TextField type="password" value={password} name="password" onChange={onChange} label="Password" variant="outlined"/>
                <input 
                    type="submit"
                    value="Sign In"
                    className="loginSubmit"
                />

                <div className="line"></div>
                <Link
                    to={'/new-account'}
                    className="newAccount"
                >Create New Account</Link>

            </form>
            

        </main>
    );
}
 
export default Login;