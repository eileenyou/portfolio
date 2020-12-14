import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Routes from './appRoutes'
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import About from './Components/About';
import Projects from './Components/Projects';
import ProjectsInfo from './Components/ProjInformation';
import Error from './Components/Error';
import './App.css';

const App = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path={Routes.home} component={About} />
        <Route exact path={Routes.projects} component={ProjectsInfo} />
        <Route path='*' component={Error} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;