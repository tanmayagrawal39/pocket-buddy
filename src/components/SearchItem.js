import React, { Component } from "react";

import { BiSearch } from 'react-icons/bi';

import SearchResults from "./SearchResults";



//search item in the home screen

class SearchItem extends Component
{
    constructor(props)
    {
        super(props);
        this.state=
        {
            searchItem:"",
            groceryItems: [
                // { prodid: 1, prodname: 'Milk', prodquantity: '1 liter', prodcost: 2.50, prodexpirydate:"12.01.2024",prodbrand:"AMUL"},
                // { prodid: 2, prodname: 'Almond Milk', prodquantity: '1 liter', prodcost: 3.50,prodexpirydate:"12.01.2024",prodbrand:"AMUL 2"},
                // { prodid: 3, prodname: 'Soy Milk', prodquantity: '1 liter', prodcost: 3.00,prodexpirydate:"12.01.2024",prodbrand:"AMUL 3"},
                // { prodid: 4, prodname: 'Bread', prodquantity: '1 loaf', prodcost: 1.50,prodexpirydate:"12.01.2024", prodbrand:"AMUL 4" },
                // { prodid: 5, prodname: 'Eggs', prodquantity: '1 dozen', prodcost: 2.00,prodexpirydate:"12.01.2024", prodbrand:"AMUL 5"},

                // { prodid: 6, prodname: 'mango', prodquantity: '1 kg', prodcost: 3.00,prodexpirydate:"12.01.2024", prodbrand:"AMUL 6"},
                // { prodid: 7, prodname: 'chocolate', prodquantity: '1 packet', prodcost: 1.50,prodexpirydate:"12.01.2024",prodbrand:"AMUL 7"},
                // { prodid: 8, prodname: 'cake', prodquantity: '1 kg', prodcost: 2.00,prodexpirydate:"12.01.2024", prodbrand:"AMUL 8"},
              ],
              data:[]
        }
        this.handleChange=this.handleChange.bind(this);
    }

    //API call to fetch data from backend
    componentDidMount() {

        console.log("entering the component did mount function------------------------>")

        fetch('http://pocketbuddy-load-balancer-640843573.us-east-1.elb.amazonaws.com:80/getAllItems')
      .then(response => response.json())
      .then(groceryItems => {
        console.log("bro working brooooo",groceryItems); // Log the fetched data
        this.setState({ groceryItems }); // Update the state object with the fetched data
      })
      .catch(error => console.error(error)); 


    //   fetch('http://localhost:8080/getAllItems', {
    //     method: 'GET',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Access-Control-Allow-Origin': '*'
    //     },
        
    //     })
    //     .then(response => response.json())
    //     .then(groceryItems => {
    //         console.log("the grocery items is in the search items. js file------>",groceryItems); // Log the fetched data
    //         this.setState({ groceryItems }); // Update the state object with the fetched data
    //     })
    //     .catch(error => console.error(error));

    


      }


    handleChange(event)
    {
        this.setState({searchItem:event.target.value})
        
    }
    render()
    {
        const {searchItem,groceryItems}=this.state;

        const filteredSearchItem=groceryItems.filter((item)=>
            // item.name.toLowerCase().includes(searchItem.toLowerCase)
            item.prodname.toLowerCase().includes(searchItem.toLowerCase())
         );

         console.log("filteredSearchItem ---------->",filteredSearchItem)

        return(
        <div style={{marginTop:40}}>
            <div style={{paddingLeft:80,display:'flex',flexDirection:'row'}}>
            <input 
                type="search"
                placeholder="Search item here"
                onChange={this.handleChange}
                value={searchItem}
                size={80}
                style={{
                    height:40,
                    
                }}
            />
                <div style={{paddingLeft:10}}>
                <BiSearch
                    size={30}
                    
                />
                </div>
            </div>

            {filteredSearchItem ? 
            (
                <div style={{ display: 'flex', flexDirection: 'row', marginLeft: 80, marginTop: 10 }}>
                    <SearchResults searchResultForItem={filteredSearchItem} />
                </div>
            ) : null}


        </div>
        );

    }

    

}

export default SearchItem;