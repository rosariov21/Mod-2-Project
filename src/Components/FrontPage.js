import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

//must import information to gravitate user attention about the point of the page 
//its main obejective is to get information


export default class FrontPage extends Component {
    render() {
        return (
            <div className="frontPageParent">
               
                

               <div className='someIntroduction'>
                
                   <h2>
                     The objective of this page is to help create all my  beer lovers become  more enthused about BEER! 
                     its  designed to help you easily find beers so you can either showoff
                       to your friends or just for those who are curious about the true art about beer . Relax and have a cold one .
                   </h2>
                   <p>Are you ready to locate the perfect beer?</p>
                   <NavLink className="button" to="/BeerFetch">Search Beers</NavLink>
               </div>
                
            </div>
        )
    }
}