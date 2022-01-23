import { Route, Routes } from 'react-router-dom';
import './App.css';

//components
import Home from "./Pages/Home/Home"
import Login from "./Pages/Login/Login"
import Users from "./Pages/Users/Users"
import Settings from "./Pages/Settings/Settings" 
import NotFound from "./Pages/NotFound/NotFound" 
import Public from "./Pages/Public" 
import Private from "./Pages/Private" 
import Header from "./Components/Header/Header"


function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element = {<Private/>}>
          <Route path ="/users" element = {<Users/>}/>
          <Route path ="/settings" element = {<Settings/>}/>
        </Route>
        <Route path= "/" element = {<Public/>}>
          <Route path ="/home" element = {<Home/>}/>
          <Route path ="/login" element = {<Login/>}/>
        </Route>
        <Route path ="/*" element = {<NotFound/>}/>
      </Routes>
    </>
  );
}

export default App;
