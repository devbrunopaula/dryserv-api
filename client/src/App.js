import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Accounts from './components/Accounts/accounts'
import './App.css';

function App() {
  return (
    <>
    
    <Router>
    
      <div>
        <ul>
            {/* <li>
            <Link to = "/" > Home </Link> 
            </li>  */}
            <li>
            <Link to = "/accounts" > Accounts </Link> 
            </li> 
            
             
        </ul>

        <hr/>
            < Route exact path = "/accounts"
            component = {
              Accounts
            }
            />
    </div> 
    </Router>
    </>
   
  );
}

export default App;
