import React from 'react';
import './App.css';
import BeerFetch from './Components/BeerFetch';
import FrontPage from './Components/FrontPage';
import 
{BrowserRouter as Router, Route, Switch, Link} 
from 'react-router-dom';
import SignUp from './Components/SignUp';


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
               <li>
                 <Link className="navBar" to ="/SignUp">Get More Information</Link>
              </li>

            </ul>
          </nav>
    </div>
        <switch>

        
 <Route  exact path="/FrontPage" component={FrontPage} />
            <Route path="/BeerFetch" component={BeerFetch} />
            <Route path ="/SignUp" component={SignUp}/>
            </switch>
      </Router>
    
  
    </div>
    //create the routing path to render
  );
}

export default App;
