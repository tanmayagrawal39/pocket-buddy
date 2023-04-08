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
                { id: 1, name: 'Milk', quantity: '1 liter', price: 2.50, expirydate:"12.01.2024" },
                { id: 2, name: 'Almond Milk', quantity: '1 liter', price: 3.50,expirydate:"12.01.2024"},
                { id: 3, name: 'Soy Milk', quantity: '1 liter', price: 3.00,expirydate:"12.01.2024"},
                { id: 4, name: 'Bread', quantity: '1 loaf', price: 1.50,expirydate:"12.01.2024" },
                { id: 5, name: 'Eggs', quantity: '1 dozen', price: 2.00,expirydate:"12.01.2024"},

                { id: 6, name: 'mango', quantity: '1 kg', price: 3.00,expirydate:"12.01.2024"},
                { id: 7, name: 'chocolate', quantity: '1 packet', price: 1.50,expirydate:"12.01.2024" },
                { id: 8, name: 'cake', quantity: '1 kg', price: 2.00,expirydate:"12.01.2024"},
              ],
        }
        this.handleChange=this.handleChange.bind(this);
    }
    handleChange(event)
    {
        const {searchItem}=this.state;
        this.setState({searchItem:event.target.value})
        
    }
    render()
    {
        const {searchItem,groceryItems}=this.state;

        const filteredSearchItem=groceryItems.filter((item)=>
            // item.name.toLowerCase().includes(searchItem.toLowerCase)
            item.name.toLowerCase().includes(searchItem.toLowerCase())

            
        );

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

            <div style={{display:'flex',flexDirection:'row',marginLeft:80,marginTop:10}}>
                <SearchResults searchResultForItem={filteredSearchItem}/>
            </div>

        </div>
        );

    }

    

}

export default SearchItem;