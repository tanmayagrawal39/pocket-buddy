

import React, {Component} from "react";

import Login from "./Login";

import App from "./App";



import { BrowserRouter , Route, Switch } from 'react-router-dom';



import Login from "./Login";

export default class RouteClass extends Component
{
    render()
    {
        return(
            <BrowserRouter>
            <Switch>
              <Route  path="/" component={App} />
              <Route path="/login" component={Login} />
              
            </Switch>
          </BrowserRouter>
        );
    }
}

