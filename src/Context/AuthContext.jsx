import React, { createContext, useState } from 'react';
import { Navigate,useNavigate } from 'react-router-dom';

export const AuthContext = createContext()

const AuthContextProvider = ({children}) => {
    const [isAuth, setIsAuth] = useState(false)
    const navigate = useNavigate()
    console.log(isAuth)

    const login = () =>{
        setIsAuth(true)
        navigate('/')
    }

    const logout = () => {
        setIsAuth(false)
        navigate('/')
    }
    return <AuthContext.Provider value={{isAuth, setIsAuth, login, logout}}>{children}</AuthContext.Provider>

}

export default AuthContextProvider