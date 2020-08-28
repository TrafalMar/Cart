import React from "react";
import { Switch, Route } from "react-router-dom";
import Cart from "./../components/Cart/Cart";

const Routes = (props) => {
  let routes = (
    <Switch>
      <Route path="/cart" exact component={Cart} />
      {/* <Route path="/cart/orders" exact component={Orders} />
      <Route path="/cart/deferred" component={DeferredOrders} /> */}
      <Route path="/" component={Cart} />
    </Switch>
  );

  return routes;
};

export default Routes;
