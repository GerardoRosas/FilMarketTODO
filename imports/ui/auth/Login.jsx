import React, { useState, useEffect } from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Grid, TextField, Button } from '@material-ui/core';
import { useHistory, Link, Redirect } from 'react-router-dom';

import { useTracker } from 'meteor/react-meteor-data';
import { Accounts } from 'meteor/accounts-base';
import { UsersCollection } from '../../api/UserCollection';


const Login = () => {

    // const userAlpha = useTracker(() => Meteor.user());
    // console.log(userAlpha);

    //Consultando la BD
    useEffect(() => {

    }, [])

    const history = useHistory();

    const [ error, setError ] = useState(false);
    const [ msg, setMsg ] = useState('');
    const [ user, setUser ] = useState({
        userName: '', 
        password: ''
    })

    const [ userDB, setUserDb ] = useState(null);

    const { userName, password } = user;

    const onChange = e => {
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }

   const onSubmit = async  e => {
        e.preventDefault();
        if(userName.trim() === '' || password.trim() === ''){
            setError(true);
            setMsg('All field are required');
        }

        setTimeout(() => {
            setError(false);
        }, 3000)

        try {
            const userDB = await UsersCollection.findOne({ password: password});
            if(!userDB){
                setError(true)
                setMsg('User not found');
            }else{
                const {nombre} = userDB
                localStorage.setItem('userName', nombre);
                history.push('/todo-list')
            }
        } catch (error) {
            console.log(error.message);
        }

        // Meteor.loginWithPassword(userName, password);

        
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
                {error ? (
                    <div className="error2">
                        <p>{msg}</p>
                    </div>
                ) : null}
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