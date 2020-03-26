import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"


//////////IMPORT BOOTSTRAP STYLESHEET
import "bootstrap/dist/css/bootstrap.min.css";

//////////IMPORT STYLES
import "./scss/index.scss";

///////////IMPORT PAGES
import IndexPage from "./pages/index"


function App() {
  return (
  <Router>
    <Switch>
      <Route to="/" component={IndexPage} />
    </Switch>
  </Router>
  );
}

export default App;
