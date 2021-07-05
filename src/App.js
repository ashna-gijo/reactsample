
import Sample from './Sample';
import Login from './Login';
import LoginFunctional from './LoginFunctional';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import{
BrowserRouter,
Switch,
Route,
Link
}from 'react-router-dom';
function App(){
  //return <h1>Hello World<Sample /></h1>;
  return <div className="container">
    <BrowserRouter>
    <Switch>
      <Route path="/" exact>
      <Login firstname="user3" lastname="last3"/>
      </Route>
      <Route path="/home"> 
      <Home/>
      </Route>
    </Switch>
    <Link to="/home">Home</Link>
   </BrowserRouter>
  </div>;
}
export default App;