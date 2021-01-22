import React from 'react';
import Navbar from './components/layout/Navbar';
import Articles from './components/articles/Articles';
import ArticleForm from './components/form/ArticleForm';
import UpdateForm from './components/form/UpdateArticle';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';


import resumeData from './data/resumeData';

function App() {
  return (
    <Router>
      <Navbar resumeData={resumeData} />
        <Switch>

          <Route exact path="/blog" component={Articles} />

          <Route exact path="/addarticle">
            <ArticleForm resumeData ={resumeData} />
          </Route>
          
          <Route exact
           path="/edit/:id"
           render={props=>(
           <UpdateForm {...props} resumeData={resumeData}/>
          )}>
            
          </Route>

        </Switch>
    </Router>
  );
}

export default App;
