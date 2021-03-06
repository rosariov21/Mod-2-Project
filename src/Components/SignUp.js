// import React, { Component } from 'react'

// export default class SignUp extends Component {
//     render() {
//         return (
//             <div className="signUpParent">
                
//                     <div className='sign-Up-Description-Parent'>
//                         <h2 className="sign-Up-Description">Came to the right page, lets get you started for our weekly Beer Info?</h2>
//                         <p className="sign-Up-Description">Sign up for more information about our Beers </p>
//                     </div>
//                     <div className="footer-newsletter-elements">
//                         <input className="input" type="text" placeholder="email"></input>
//                         <button className="buttonForSignUp" type="submit">Submit</button>
//                     </div>
//                     <div>
//                     <input placeholder="Full name" type='text' />
//                     <button className="buttonForSignUp" type="submit">Submit</button>
//                     </div>
//                 </div>
                
           
//         )
//     }
// }

import React from 'react';

class SignUp extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            email: "",
            password: "",
            age: "",
        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    emailhandler = (event) => {
        this.setState({
            email:event.target.value
        })

    }
    passwordhandler =(event) =>{
        this.setState({
            password: event.target.value
        })
    }
   agehandler =(event) =>{
        this.setState({
            age:event.target.value
        })
    }
    handleSubmit =(event) =>{
        alert(`${this.state.email} ${this.state.password} ${this.state.age}`)
        console.log(this.state);
        this.setState({
            email: "",
            password: "",
           age: "",
       

        })
        event.preventDefault()
    }
    render(){
        return(

            <div className="signUpParent">
                
                
                       <h2 className="sign-Up-Description">Came to the right page, lets get you started for our weekly Beer Info?</h2>
                       <p className="sign-Up-Description">Sign up for more information about our Beers </p> 
                       
                      
         
                <h1>Register Now To Get All The Beer Information</h1>
                <form onSubmit={this.handleSubmit}>
                    
                <input placeholder='email' type='text' value={this.state.email} onChange={this.emailhandler} />
                   <br/>
                    <input placeholder='Password:' id='submit' type='password' value={this.state.password} onChange={this.passwordhandler}/>
                    
                    <br/>
                    <input placeholder='Age' type='text'value={this.state.age} onChange={this.agehandler}/>
                    <br/>
                    <input type="submit" value="Submit"/>
                    
                </form>
            </div>
        )
    }
}
export default SignUp;