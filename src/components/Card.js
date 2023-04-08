
import React, { Component } from "react";

import "./styles.css"

//code for each item rendering in the home screen

class Card extends Component
{

    constructor(props)
    {
        super(props);
        this.state=
        {
            numberOfItem:0
        };
        this.incrementCount=this.incrementCount.bind(this);
        this.decrementCount=this.decrementCount.bind(this);
    }

    decrementCount()
    {
        if(this.state.numberOfItem)
        {
            this.setState({numberOfItem:this.state.numberOfItem-1})
        }
    }
    incrementCount()
    {
            this.setState({numberOfItem:this.state.numberOfItem+1})
            console.log("the increment counter is pressed");
    }
    render()
    {
        const {eachItem}=this.props;
        const divstyle={display:"flex",flex:"row",justifyContent:"space-between",border: '2px solid black',marginTop:20,marginLeft:10,width:'500px'};
        const innerStyle={paddingLeft: 15, paddingRight:15};

        const buttonStyle={marginLeft:10, marginRight:10, marginTop:20};
        return(
            <div style={divstyle}>
                <h4 style={innerStyle}>{eachItem.name}</h4>
                
                    <h4 style={innerStyle}>{eachItem.quantity}</h4>
                
                
                    <h4 style={innerStyle}>{eachItem.price}</h4>
                    <h4 style={innerStyle}>{eachItem.expirydate}</h4>
               
                <div style={{display:'flex'}}>
                    <div style={buttonStyle}>
                    <button  onClick={this.decrementCount}>-</button>
                    </div>
                    
                    <span style={{paddingTop:20}}>
                        {this.state.numberOfItem}
                        </span>
                    <div style={buttonStyle}>
                    <button  onClick={this.incrementCount}>+</button>
                    </div>
                </div>
                
    
            </div>
        )
    }
}

export default Card;

