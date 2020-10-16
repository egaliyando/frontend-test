import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//pages
import Outlets from "ui/pages/Outlets";
import SignIn from "ui/pages/auth/SignIn";
import SignOut from "ui/pages/auth/SignOut";
import Dashboard from "ui/pages/Dashboard";
import Devices from "ui/pages/Devices";
import Product from "ui/pages/Products";
import Categories from "ui/pages/Products/Categories";
import Variants from "ui/pages/Products/Variants";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/product" component={Product} />
        <Route exact path="/product/categories" component={Categories} />
        <Route exact path="/product/variants" component={Variants} />
        <Route exact path="/devices" component={Devices} />
        <Route exact path="/outlets" component={Outlets} />
        <Route exact path="/sign-in" component={SignIn} />
        <Route exact path="/sign-out" component={SignOut} />
      </Switch>
    </Router>
  );
}

export default App;
