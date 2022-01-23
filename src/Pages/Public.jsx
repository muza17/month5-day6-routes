import {Outlet, Navigate, useLocation} from "react-router-dom";
import useAuth from "../Hook/useAuth";

function Public(){

    const[token] = useAuth()
    const {pathname} = useLocation()


    if(token && pathname === "/login"){
        return <Navigate to="/home"/>
    }

    return  <Outlet></Outlet>
}
export default Public