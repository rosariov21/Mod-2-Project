import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

//must import information to gravitate user attention about the point of the page 
//its main obejective is to get information


export default class FrontPage extends Component {
    render() {
        return (
            <div className="frontPageParent">
               
                

               <div className='someIntroduction'>
              <img src="https://res.cloudinary.com/teepublic/image/private/s--u-_qG_r9--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_6e2229,e_outline:48/co_6e2229,e_outline:inner_fill:48/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1514440809/production/designs/2228531_1.jpg"/>
               <p>Are you ready to search for the perfect beer for you ?</p>
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