import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router-dom';

class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return this.props.posts.map(post => {
      return(
        <Link to={`posts/${post.id}`} key={post.id} className="list-group-item">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{post.name}</h5>
            <small>{post.breed}</small>
          </div>
        </Link>
      );
    })
  }

  render() {
    return(
      <div>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-5">List of Kittens</h1>
          </div>
        </div>

        <div className="container">
          <ul className="list-group">
            {this.renderPosts()}
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts.all };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
