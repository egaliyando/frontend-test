import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//pages
import Outlets from "ui/pages/Outlets";
import Login from "ui/pages/Auth/Login";
import Dashboard from "ui/pages/Dashboard";
import Devices from "ui/pages/Devices";
import Product from "ui/pages/Products";
import Categories from "ui/pages/Products/Categories";
import Variants from "ui/pages/Products/Variants";
import ManageProduct from "ui/pages/OutletTab/ManageProduct";
import ManageDevice from "ui/pages/OutletTab/ManageDevice";
import Statistic from "ui/pages/OutletTab/Statistic";
import DetailInfo from "ui/pages/OutletTab/DetailInfo";
import DevicesPreview from "ui/pages/DevicePreview";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/product" component={Product} />
        <Route exact path="/outlets/manage-product" component={ManageProduct} />
        <Route exact path="/outlets/manage-device" component={ManageDevice} />
        <Route exact path="/outlets/statistik" component={Statistic} />
        <Route exact path="/outlets/detail-info" component={DetailInfo} />
        <Route exact path="/product/categories" component={Categories} />
        <Route exact path="/product/variants" component={Variants} />
        <Route exact path="/devices" component={Devices} />
        <Route path="/devices/preview" component={DevicesPreview} />
        <Route exact path="/outlets" component={Outlets} />
        <Route exact path="/sign-in" component={Login} />
        {/* <Route exact path="/sign-out" component={SignOut} /> */}
      </Switch>
    </Router>
  );
}

export default App;
