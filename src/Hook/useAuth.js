import {useContext} from "react";
import {AuthContext} from "./../Context/AuthContext";

function useAuth(){

    const{token, setToken} = useContext(AuthContext)
    return [token, setToken] 
}

export default useAuth