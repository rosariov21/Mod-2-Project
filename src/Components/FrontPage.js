import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

//must import information to gravitate user attention about the point of the page 
//its main obejective is to get information


export default class FrontPage extends Component {
    render() {
        return (
            <div className="frontPageParent">
               
                

               <div className='someIntroduction'>
              
               <p>Are you ready to locate the perfect beer?</p>
                   <h4>
                     The objective of this page is to help create all my  beer lovers become more enthused about BEER!<br/>
                     It's  designed to help you easily find beers so you can brag 
                       to your friends on how much of an expert you are <br/> or just for those who are curious about the true art about beer . 
                   </h4>
                   <h1>Now please , Relax and have a cold one .</h1>
        
                   <NavLink className="button" to="/BeerFetch">Search Beers</NavLink>
               </div>
                
            </div>
        )
    }
}