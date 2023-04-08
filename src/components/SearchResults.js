

import React, { Component } from "react";

import Card from "./Card";

import { Link } from "react-router-dom";

//search results

class SearchResults extends Component
{
    constructor(props)
    {
        super(props);
        const { searchResultForItem } = props;
        const itemCounts = searchResultForItem.map((item) => ({
        id: item.id,
        count: 0,
        }));
        this.state = {
        itemCounts,
        };
        this.checkOutButtonClick=this.checkOutButtonClick.bind(this);
        this.incrementCount=this.incrementCount.bind(this);
        this.decrementCount=this.decrementCount.bind(this);
    }
    checkOutButtonClick()
    {
        console.log("check out button clicked------>");
    }

    decrementCount(itemId)
    {
        const { itemCounts } = this.state;
        const index = itemCounts.findIndex((item) => item.id === itemId);
        if (index >= 0 && itemCounts[index].count > 0) {
          const updatedCounts = [...itemCounts];
          updatedCounts[index].count--;
          this.setState({ itemCounts: updatedCounts });
        }
    }
    incrementCount(itemId)
    {
        const { itemCounts } = this.state;
        const index = itemCounts.findIndex((item) => item.id === itemId);
        if (index >= 0) {
          const updatedCounts = [...itemCounts];
          updatedCounts[index].count++;
          this.setState({ itemCounts: updatedCounts });
          console.log("the increment counter is pressed");
        }
    }


    render()
    {
        const divstyle={display:"flex",flex:"row",justifyContent:"space-between",border: '2px solid black',marginTop:20,marginLeft:10,width:'500px'};
        const innerStyle={paddingLeft: 15, paddingRight:15};

        const buttonStyle={marginLeft:10, marginRight:10, marginTop:20};
        const {searchResultForItem}=this.props;
        console.log("searchResultForItem in search results.js------>",searchResultForItem)

        const isDisabled =
        this.state.itemCounts.filter((item) => item.count > 0).length === 0;


        return(
            <div>
                {searchResultForItem.map((eachItem,index)=>
                    // <Card eachItem={item}/>
                    <div style={divstyle}>
                <h4 style={innerStyle}>{eachItem.name}</h4>
                
                    <h4 style={innerStyle}>{eachItem.quantity}</h4>
                
                
                    <h4 style={innerStyle}>{eachItem.price}</h4>
                    <h4 style={innerStyle}>{eachItem.expirydate}</h4>
               
                <div style={{display:'flex'}}>
                <div style={buttonStyle}>
                <button onClick={() => this.decrementCount(eachItem.id)}>
                  -
                </button>
              </div>
                    
                    <span style={{ paddingTop: 20 }}>
                {
                  this.state.itemCounts.find((item) => item.id === eachItem.id)
                    .count
                }
              </span>
                        <div style={buttonStyle}>
                <button onClick={() => this.incrementCount(eachItem.id)}>
                  +
                </button>
              </div>
                </div>
                
    
            </div>
                )}
                <Link to="/checkout">
                <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-end'}}>
                    <button
                    disabled={isDisabled}
                    style={{ marginTop: 30, width: 80, height: 30 }}
                    onClick={this.checkOutButtonClick}
                    >
                    Check Out
                    </button>
                </div>
                </Link>
                
            </div>
        )
    }
}

export default SearchResults;