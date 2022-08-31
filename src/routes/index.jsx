import React from "react";
import { Route, Switch } from "react-router-dom";
import Cart from "../pages/Cart";
import Store from "../pages/Store";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Store />
      </Route>
      <Route path="/cart">
        <Cart />
      </Route>
    </Switch>
  );
};

export default Routes;
