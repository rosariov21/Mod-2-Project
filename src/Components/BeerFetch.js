import React, { Component } from "react";
import axios from 'axios';
import { render } from "@testing-library/react";
export default class BeerFetch extends Component{
    state = {
        BeerOne:[],
        isloading:true
    };


