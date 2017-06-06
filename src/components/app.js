import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './navbar';
import SearchIndex from './search_index';
import PostsIndex from './posts_index';
import PostsShow from './posts_show';
import PostsNew from './posts_new';
import PostsEdit from './posts_edit';
import NotFound from './not_found';
import '../../style/app.scss';

const Home = () => {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-3">Hello, kittens!</h1>
        <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
      </div>
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/search" component={SearchIndex} />
            <Route exact path="/posts" component={PostsIndex} />
            <Route exact path="/posts/:id" component={PostsShow} />
            <Route exact path="/edit/:id" component={PostsEdit} />
            <Route exact path="/new" component={PostsNew} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
