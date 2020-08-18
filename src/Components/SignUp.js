import React, { Component } from 'react'

export default class SignUp extends Component {
    render() {
        return (
            <div className="signUpParent">
                
                    <div className='sign-Up-Description-Parent'>
                        <h2 className="sign-Up-Description">Came to the right page, lets get you started for our weekly Beer Info?</h2>
                        <p className="sign-Up-Description">Sign up for more information about our Beers </p>
                    </div>
                    <div className="footer-newsletter-elements">
                        <input className="input" type="text" placeholder="email"></input>
                        <button className="buttonForSignUp" type="submit">Submit</button>
                    </div>
                    <div>
                    <input placeholder="Full name" type='text' />
                    <button className="buttonForSignUp" type="submit">Submit</button>
                    </div>
                </div>
                
           
        )
    }
}