import React, { useState, useEffect } from 'react';
import { Grid, Button } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Link, useLocation, useHistory } from 'react-router-dom';



export const Header = () => {
    
    const location = useLocation();
    const history = useHistory();

    const [ hasuser, setHasUser ] = useState(false);
    const [ person, setPerson ] = useState(null)

    useEffect(() => {
        const userExist = localStorage.getItem('userName');
        if(!userExist){
            history.push('/');
        }else{
            setHasUser(true);
            setPerson(userExist);
        }
    }, [person])

    const logout = () => {
        localStorage.clear();
        history.push('/');
        console.log('Cerrando sesion');
        setHasUser(false);
    }

    return ( 
        <Grid container className="containerHeader" direction="row" justify="space-around" alignItems="center" >
            <div className="titulo">
                <h1>Todo List</h1>
                {hasuser ? (
                    <div className="logout">
                        <p>Hello! {person}</p>
                        <ExitToAppIcon fontSize="large" onClick={logout} className="bye"/>
                    </div>
                ) : null}
            </div>
            
            {(location.pathname === '/login' || location.pathname === '/todo-list' || location.pathname === '/new-account') ? null : ( 
                <Link to={'/login'} className="loginTag">
                    Login
                </Link>)
            }
        </Grid>
     );
}