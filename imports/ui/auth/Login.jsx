import React, { useState } from 'react';
import { Container, Grid, TextField, Button } from '@material-ui/core';
import { useHistory, Link } from 'react-router-dom';



const Login = () => {

    const history = useHistory();

    const [ alerta, setAlerta ] = useState(false);
    const [ user, setUser ] = useState({
        email: '', 
        password: ''
    })

    const { email, password } = user;

    const onChange = e => {
        setUser({
            ...user,
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

                <div className="">
                    <h1>Login</h1>
                </div>
                <TextField value={email} name="email" onChange={onChange} label="Email" variant="outlined"/>
                <TextField value={password} name="password" onChange={onChange} label="Password" variant="outlined"/>
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