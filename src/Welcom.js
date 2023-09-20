import { Component } from "react"
import Product from "./Product";

import File from './File';

class Welcome extends Component{
    constructor(){
        super();
        this.state = {a:'Welcome to my page'};
    }

    render(){
        return(
            <div>
                <h3>{this.state.a}</h3>
               
            </div>)   
      
    }
}
export default Welcome;