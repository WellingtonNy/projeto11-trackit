import React, { useState } from 'react';

export const AuthContext =React.createContext({})

export const AuthProvider = (props) =>{
    
    const [tk,setTk]= useState({})

    return(
        <AuthContext.Provider value={{tk,setTk}}>
            {props.children}
        </AuthContext.Provider>
    )
}