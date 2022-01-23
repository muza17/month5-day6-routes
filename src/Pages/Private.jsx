import {Outlet, Navigate} from "react-router-dom";
import useAuth from "../Hook/useAuth";
function Private2(){
    
}

function Private(){

    const [token] = useAuth();

    if(token){
        return <Outlet></Outlet>
    }else{

        return <Navigate to="/login"/>
    }

}   
export default Private