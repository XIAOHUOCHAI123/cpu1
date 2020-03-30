import * as React from 'react';
//import { Typography } from 'antd';
import All from './Router';
import {BrowserRouter, Switch} from "react-router-dom";
import {Route} from "react-router";


export default function App() {
  return <BrowserRouter>
    <Switch>
      <Route path="/home/" component={All} />
      <Route component={All} />
    </Switch>
  </BrowserRouter>

}
