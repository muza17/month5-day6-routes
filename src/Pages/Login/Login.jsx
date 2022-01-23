import useAuth from "./../../Hook/useAuth";
function Login(){

    const[token, setToken] = useAuth()

    return(
        <>
            <h1>Login</h1>
            <input/>
            <button type="submit" onClick={e => setToken("lkasnclnls")}>Login</button> 
        </>
    );
}
export default Login