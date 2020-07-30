import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../Home/home";
import Products from "../Products/index";
import Carrinho from "../Carrinho/index";

class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/carrinho" component={Products} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default Router;
