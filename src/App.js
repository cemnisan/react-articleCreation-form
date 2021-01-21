import React from 'react';
import Navbar from './components/layout/Navbar';
import Article from './components/articles/Article';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';


import resumeData from './data/resumeData';

function App() {
  return (
    <Router>
      <Navbar resumeData={resumeData} />
        <Switch>
          <Route exact path="/blog" component={Article} />
        </Switch>
    </Router>
  );
}

export default App;
