import "./Header.css"
import {NavLink} from "react-router-dom"
import useLang from "../../Hook/useLang";
import Content from "./../../Localization/Content"
import logo from "./../../assets/nerdify-logo.svg"
import "./Header.css"

function Header(){

    const [lang] = useLang()
   

    return(
        <>
        <header>
            <div className="container">
                <img src={logo}></img>
                <div className="header-list">
                    <NavLink className="header__nav-item" to = "/home">Home</NavLink>
                    <NavLink className="header__nav-item" to = "/settings">Settings</NavLink>
                    <NavLink className="header__nav-item" to = "/login">Login</NavLink>
                    <NavLink className="header__nav-item" to = "/users">Users</NavLink> 
                </div>
            </div>

        </header>
        </>
    );
}
export default Header