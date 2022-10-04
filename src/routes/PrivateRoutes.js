import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";
import BuilderChild from "../components/builder/BuilderChild";

const PrivateRoutes = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/builder/topBar" component={BuilderChild} exact={true} />
        </Switch>
      </Router>
    </div>
  );
};

export default withRouter(PrivateRoutes);
