import React, { useReducer } from 'react';
import authContext from './authContext';
import authReducer from './authReducer';



const AuthState = ({children}) => {

    const initialState = {
        token: '',
        autenticado: null,
        usuario: null,
        mensaje: null
    }

    //Creamos el state y dispatch
    const [ state, dispatch ] = useReducer(authReducer, initialState);

    const iniciarSesion = () => {
        console.log('desde autState');
    }

    return ( 
        <authContext.Provider
            value={{
                token: state.token,
                autenticado: state.autenticado,
                usuario: state.usuario,
                mensaje: state.mensaje,
                iniciarSesion,
            }}
        >
            {children}
        </authContext.Provider>
    );
}
 
export default AuthState;