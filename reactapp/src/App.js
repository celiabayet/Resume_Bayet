// React
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Import screens
import Home from './screens/Home';
import Who from './screens/Who';
import Skills from './screens/Skills';
import Work from './screens/Work';
import Contact from './screens/Contact';

// Styles
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/qui-suis-je" component={Who} />
        <Route path="/competences" component={Skills} />
        <Route path="/projets" component={Work} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
