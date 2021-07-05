import{useState}from 'react';
import{useHistory}from 'react-router-dom';

function LoginFunctional(){
    const history= useHistory;
    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");
        

   const usernameChange=(event)=>{
       setUsername(event.target.value);
        
    }
    const passwordChange=(event)=>{
        setPassword(event.target.value);
        
    }

    const onSubmitClick=(event)=>{
        event.preventDefault();
        if(username=="user1"&&password=="123"){
            alert("success");
            history.push("/home")
        }else{
            alert("Invalid Credentials")
        }
        }
        return <div className="row">
            <h1>Login{username}</h1>
            <div className="col-md-6">
            
            <form onSubmit={onSubmitClick}>
            <label>Username</label>
            <input className="form-control" type="text" name="username" />
            <label>Password</label>
            <input className="form-control" type="password" name="password" />
            <button className="btn btn-primary" type="submit">Login</button>
           
            </form>
            </div>
            </div>
    }

    export default LoginFunctional(Login);