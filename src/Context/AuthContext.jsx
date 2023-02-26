import axios from 'axios';
import React, { createContext, useState } from 'react';
import { Navigate,useNavigate } from 'react-router-dom';

export const AuthContext = createContext()

const AuthContextProvider = ({children}) => {
    const [isAuth, setIsAuth] = useState(false)
    const [name, setName] = useState('')
    // const [userData, setUserData] = useState([])
    const navigate = useNavigate()

    const login = (num) =>{
        // console.log(num.target)
        setIsAuth(true)
        // navigate('/')

        axios.get(`http://localhost:8080/users`)
        .then((res)=>{
            res.data?.map((user)=>{
                if(user.number == 9876543210){
                    
                    setName(user.fname)
                    navigate('/')
                }else{
                    alert(`Please Create new Account`)
                    navigate('/createaccount')
                }
    
            })
        })

        
    }
    
    
    
    const logout = () => {
        setIsAuth(false)
        navigate('/')
    }
    return <AuthContext.Provider value={{isAuth, setIsAuth, login, logout, name}}>{children}</AuthContext.Provider>

}

export default AuthContextProvider