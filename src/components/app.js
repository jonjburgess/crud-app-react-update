import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './navbar';
import PostsIndex from './posts_index';
import PostsShow from './posts_show';
import PostsNew from './posts_new';
import NotFound from './not_found';
import '../../style/app.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={() => { return <div>Home</div> }} />
            <Route exact path="/posts" component={PostsIndex} />
            <Route exact path="/posts/:id" component={PostsShow} />
            <Route exact path="/new" component={PostsNew} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
