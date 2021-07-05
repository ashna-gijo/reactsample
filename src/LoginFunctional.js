import{useState}from 'react';

function LoginFunctional(){
    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");
        
        return <div className="row">
            <h1>Login{username}</h1>
            <div className="col-md-6">
            
            <form>
            <label>Username</label>
            <input className="form-control" type="text" name="username" />
            <label>Password</label>
            <input className="form-control" type="password" name="password" />
            <button className="btn btn-primary" type="submit">Login</button>
           
            </form>
            </div>
            </div>
    }

    export default LoginFunctional;