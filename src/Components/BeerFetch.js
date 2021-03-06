import React, { Component } from "react";
import axios from 'axios';
import { render } from "@testing-library/react";
export default class BeerFetch extends Component{
    constructor(props){
        super(props);
        this.state ={
            beers: '',
            beersList:'',
            food_paring:'',
            tagline:'',
            description:'',
            image_url: '',
            userInput:''


        }
        this.handleUserInput=this.handleUserInput.bind(this)
        //use the callback function to make sure what it belongs to 
        //doesnt get comfuse who is "this"
    }


    componentDidMount(){
        this.getBeerInfo()
    }
    mapbeerList(bList){
        return(
            bList.map(beer =>
                <div className="bigParent" key={beer['id']}>
                 
                 <div>
                 <p>Drink Responsibly</p>
                 </div>
                <ol className="center">
                { /*<h1 className='name'>Name: {beer["name"]}</h1> */}
                <li>
                    <img  className="BeerImg" src={beer.image_url} alt="Beer Type"/>
                    </li>
                    
                    <h1 className='name'>Name: {beer.name}</h1>
                           <br/>
                    <h1 className='food'>Best food to go with this beer : {beer.food_pairing}</h1>
                           <br/>
                    <h2 className='slogan'>Slogan for the beer: {beer.tagline}</h2>
                             <br/>
                    <h5 className="description">Information aboout the beer:{beer.description}</h5>
                    
                    
                </ol>
        
        
                </div>))
                // this is the part where you invoke the data by using the actual name from data
        

    }
    
    async getBeerInfo(){
        try{
        
        
        const response = await axios.get('https://api.punkapi.com/v2/beers')
        console.log(response)
    
    let beerList = this.mapbeerList(response.data);
    //     <div key={beer['id']}>
         
    //      <div>
    //      <p>Drink Responsibly</p>
    //      </div>
    //     <ol>
    //     { /*<h1 className='name'>Name: {beer["name"]}</h1> */}
            
    //         <h1 className='name'>Name: {beer.name}</h1>
    //                <br/>
    //         <h1 className='food'>Best food to go with this beer : {beer.food_pairing}</h1>
    //                <br/>
    //         <h2 className='slogan'>Slogan for the beer: {beer.tagline}</h2>
    //                  <br/>
    //         <h5>Information aboout the beer:{beer.description}</h5>
            
    //         <li>
    //         <img  className="BeerImg" src={beer.image_url} alt="Beer Type"/>
    //         </li>
    //     </ol>


    //     </div>);

        this.setState({
            beers:response.data,
            beersList:beerList
        })
} catch(error){
    console.error(error);
}
}

handleUserInput(e){

    let lowerInput=this.state.userInput.toLowerCase()
 this.setState({
     userInput:e.target.value,
     beersList:this.mapbeerList(this.state.beers.filter(beer=> beer.name.toLowerCase().includes(lowerInput)||
    (beer.description.length>0 && beer.description.toLowerCase().includes(lowerInput))||
    (beer.food_pairing.length>0 && beer.food_pairing.includes(lowerInput))||
   (beer.tagline.length>0 && beer.tagline.toLowerCase().includes(lowerInput))))

 })
 console.log(e.target.value)
    
    

}
//need an event object
//creating a conditional 
// includes (part of description)
// value={this.state.userInput}
// having trouble creating case sensitve method
//use LowerCase to include a lower case input so user can actually type with upper or lowercase

    render(){
       console.log(this.state.beers)
    
        
        return(
            <div className="parentBoxContainer">
      <div className="boxContainer">
     <input className="searchBox"  type="text" placeholder="Search Beer" onChange={this.handleUserInput}/>
 <button type="submit">Get Beers Information</button>
        </div>





            <div>

        { this.state.beersList}
        
        </div>
        </div>
       );
    }
}