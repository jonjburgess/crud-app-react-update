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
        <li className="list-group-item" key={post.id}>
          <Link to={`posts/${post.id}`}>
            <span className="pull-xs-right">{post.breed}</span>
            <strong>{post.name}</strong>
          </Link>
        </li>
      );
    })
  }

  render() {
    return(
      <div>
        <h3>List of Kittens</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts.all };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
