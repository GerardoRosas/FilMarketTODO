import React from 'react';
import { Grid, Button } from '@material-ui/core';

import {
    Link,
    useLocation
} from 'react-router-dom';

export const Header = () => {
    
    const location = useLocation();

    const redirect = () => {
        console.log('Iniciando sesion');
    }

    return ( 
        <Grid container className="containerHeader" direction="row" justify="space-between" alignItems="center" >
            <div className="titulo">
                <h1>Todo List</h1>
            </div>
            
            {(location.pathname === '/login' || location.pathname === '/todo-list' || location.pathname === '/new-account') ? null : ( 
                <Link to={'/login'} className="loginTag">
                    Login
                </Link>)}
        </Grid>
     );
}