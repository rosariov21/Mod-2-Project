import React, { Component } from "react";
import axios from 'axios';
import { render } from "@testing-library/react";
export default class BeerFetch extends Component{
    state = {
        BeerOne:[],
        isloading:true
    };


componentDidMount(){
    let One = 'https://api.punkapi.com/v2/beers'
//add cors to upload becasue of my server it might not render so lets add this just in case 


// let cors = 'https://cors-anywhere.herokuapp.com/'

let cors = ""
const invokeOne = axios.get(cors + One);

axios.all([invokeOne])
.then(axios.spread((...responses) => {
    const BeerOne = responses[0].data.beers;

this.setState({isloading:false,invokeOne});
console.log(responses)

}))

.catch((errors =>{
    console.error(console.errors);

})
)};

render(){
    let responses ;
    if (!this.state.isloading){
        responses = (<div>
            <h1>BEER-CONTACT:{this.state.invokeOne}</h1>
        </div>

    )
    }

    
    return(
        <div>
            {responses}
        </div>
   );
}
} 