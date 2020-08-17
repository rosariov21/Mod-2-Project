import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import BeerFetch from './Components/BeerFetch';
import FrontPage from './Components/FrontPage';

function App() {
  return (
    <div className="App">

      <Router>
        <div>
          <nav>
            <ul>
              <li>
              <Link className='navBar' to = "/FrontPage">Main Menu</Link>
              </li>
              <li>
              <Link className="navBar" to ="/BeerFetch">Beer</Link>
               </li>
              

            </ul>
          </nav>
    </div>
        <switch>

        
 <Route path="/FrontPage" component={FrontPage} />
            <Route path="/BeerFetch" component={BeerFetch} />
            </switch>
      </Router>
  
    </div>
  );
}

export default App;
