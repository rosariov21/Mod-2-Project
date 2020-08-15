import React, { Component } from "react";
import axios from 'axios';
import { render } from "@testing-library/react";
export default class BeerFetch extends Component{
    constructor(props){
        super(props);
        this.state ={
            beers: '',
            beersList:'',
            food_paring:''
            
        }
    }


    componentDidMount(){
        this.getBeerInfo()
    }
    
    
    async getBeerInfo(){
        try{
        
        
        const response = await axios.get('https://api.punkapi.com/v2/beers')
        console.log(response)
    
    let beerList = response.data.map(beer =>
        <div key={beer['id']}>

        <ul>
            <h1>Name: {beer["name"]}</h1>
                   <br/>
            <h1>Best food to go with this beer : {beer["food_pairing"]}</h1>
        </ul>


        </div>);

        this.setState({
            beers:response.data,
            beersList:beerList
        })
} catch(error){
    console.error(error);
}
}

    render(){
       console.log(this.state.beers)
    
        
        return(
            <div>
        { this.state.beersList}
        
        </div>
       );
    }
}