import React from 'react'
import SignUp from './SignUp';

import BeerFetch from './BeerFetch';
import FrontPage from './FrontPage';
import 
{BrowserRouter as Router, Route, Switch, Link} 
from 'react-router-dom';
import Instructions from './Instructions';


function NavBar() {
    return (
      
  
        <Router>
          
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
                <li>
                  <Link className="navBar" to ="/Instructions">Instructions</Link>
                </li>
  
              </ul>
            </nav>
      
          <Switch>
  
          
   <Route  exact path="/FrontPage" component={FrontPage} />
              <Route path="/BeerFetch" component={BeerFetch} />
              <Route path ="/SignUp" component={SignUp}/>
              <Route path = "/Instructions" component={Instructions}/>
              </Switch>
        </Router>
      
    
     
      //create the routing path to render
    );
  }

  export default NavBar ;