import React, { Component } from "react";
import axios from 'axios';
import { render } from "@testing-library/react";
export default class BeerFetch extends Component{
    state = {
        breweries:[],
        isloading:true
    };


    componentDidMount(){
        axios.get(`https://api.openbrewerydb.org/breweries`)
        .then(res => {
          const breweries = res.data;
        this.setState({ breweries:breweries,
        isloading:false });
        })
    }
    
    
    
    render(){
       console.log(this.state.breweries)
    
        
        return(
            <ul>
        { this.state.breweries.map(brew => <li key={brew.id}>{brew.name}</li>)}
        


      </ul>
       );
    }
    } 