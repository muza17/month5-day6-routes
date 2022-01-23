import { useEffect, createContext, useState} from "react";

const Context = createContext();


function Provider({children}){
    const [token, setToken] = useState(window.localStorage.getItem("token")||null)

    useEffect(()=>{
        window.localStorage.setItem("token", token)
    },[token])


        return(
            <>
                <Context.Provider value={{token, setToken}}>{children}</Context.Provider>
            </>
        );
}

export  {Provider as AuthProvider, Context as AuthContext}