import React from 'react';
import logo from './logo.svg';
import './App.css';
import BeerFetch from './Components/BeerFetch';

function App() {
  return (
    <div className="App">

      <Router>
        <div>
          <nav>
            <ul>
              <li>
              <link className='navBar' to = "/home">Main Menu</link>
              </li>
              <li>

              </li>
              

            </ul>
          </nav>
        </div>


      </Router>
  
    </div>
  );
}

export default App;
