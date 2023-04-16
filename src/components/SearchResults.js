//working code




import React, { Component } from "react";

import { Link } from "react-router-dom";

//search results

class SearchResults extends Component
{
    constructor(props)
    {
        super(props);
        const { searchResultForItem } = props;
        console.log("props in constructor----->",searchResultForItem)
        const itemCounts = searchResultForItem.map((item) => ({
        id: item.prodid,
        count: 0,
        }));


        this.state = {
        itemCounts,
        updatedItems: [],
        };
        this.checkOutButtonClick=this.checkOutButtonClick.bind(this);
        this.incrementCount=this.incrementCount.bind(this);
        this.decrementCount=this.decrementCount.bind(this);
    }
    checkOutButtonClick()
    {
        console.log("check out button clicked------>");
    }

    componentDidUpdate(prevProps, prevState) {

      const { searchResultForItem } = this.props;

     

      if (prevProps.searchResultForItem !== searchResultForItem) {
        const itemCounts = searchResultForItem.map((item) => ({
          id: item.prodid,
          count: 0,
        }));
        this.setState({ itemCounts });
      }

      if (prevState.itemCounts !== this.state.itemCounts) 
      {
        const updatedItems = this.state.itemCounts.filter((item) => item.count > 0);
        this.setState({ updatedItems });
        console.log("set---------------->",updatedItems)
      }

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
          
        }
    }


    render()
    {
        const divstyle={display:"flex",flex:"row",justifyContent:"space-between",border: '2px solid black',marginTop:20,marginLeft:10,width:'500px'};
        const innerStyle={paddingLeft: 15, paddingRight:15};

        const buttonStyle={marginLeft:10, marginRight:10, marginTop:20};
        const {searchResultForItem}=this.props;
        

        const isDisabled =
        this.state.itemCounts.filter((item) => item.count > 0).length === 0;


        return(
            <div>
                {searchResultForItem.map((eachItem,index)=>
                    // <Card eachItem={item}/>
                    <div style={divstyle}>
                <h4 style={innerStyle}>{eachItem.prodname}</h4>
                <h4 style={innerStyle}>{eachItem.prodbrand}</h4>
                
                    <h4 style={innerStyle}>{eachItem.prodquantity}</h4>
                
                
                    <h4 style={innerStyle}>{eachItem.prodcost}</h4>
                    <h4 style={innerStyle}>{eachItem.prodexpirydate}</h4>
               
                <div style={{display:'flex'}}>
                <div style={buttonStyle}>
                <button onClick={() => this.decrementCount(eachItem.prodid)}>
                  -
                </button>
              </div>
                    
              <span style={{ paddingTop: 20 }}>
                {
                  this.state.itemCounts.find((item) => item.id === eachItem.prodid)?.count || 0
                }
              </span>
                        <div style={buttonStyle}>
                <button onClick={() => this.incrementCount(eachItem.prodid)}>
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