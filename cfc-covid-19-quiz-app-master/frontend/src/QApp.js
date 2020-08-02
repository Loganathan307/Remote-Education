import React from 'react';  
import logo from './logo.svg';  
import './App.css';  
import Login from './Login';  
import Reg from './Reg';  
import App from './App';  
import PostQuestion from './PostQuestion';  
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './Dashboard';  
import { store } from './store';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';   
function QApp() {  
  return (  
    <Router>    
      <div className="container">    
        <nav className="navbar navbar-expand-lg navheader">    
          <div className="collapse navbar-collapse" >    
            <ul className="navbar-nav mr-auto">    
              <li className="nav-item">    
                <Link to={'/Login'} className="nav-link">Login</Link>    
              </li>    
              <li className="nav-item">    
                <Link to={'/Signup'}  className="nav-link">Sign Up</Link>    
              </li>    
              
               
            </ul>    
          </div>    
        </nav> <br />    
        <Switch>    
          <Route exact path='/Login' component={Login} />    
          <Route path='/Signup' component={Reg} />    
          <Route path='/App' component={App} />    
          <Route path='/PostQuestion' component={PostQuestion} />    
       
        </Switch>    
        <Switch>  
        <Route path='/Dashboard' component={Dashboard} />    
        </Switch>  
      </div>    
    </Router>   
  );  
}  
  
export default QApp;  