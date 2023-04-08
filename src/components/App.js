import React from "react";
import Header from "./Header";
import SearchItem from "./SearchItem";
import SearchResults from "./SearchResults";
import Map from "./Map";


import { createBrowserHistory } from "history";


import {  BrowserRouter,Routes, Route } from 'react-router-dom';

import Login from "./Login";


const history = createBrowserHistory();

class App extends React.Component {
  constructor(props) {
    super(props);
    
  }

 

  render() {
    return (
      
        <div>
          <Header onLoginClick={this.handleLoginClick} />
          <Map/>
          <SearchItem/>
          
          
          
        </div>

    );
  }
}

export default App;