import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions/index';
import { Link, Redirect } from 'react-router-dom';

class PostsShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deleted: false
    };
  };

  componentWillMount() {
    this.props.fetchPost(this.props.match.params.id);
  }

  onDeleteClick() {
    this.props.deletePost(this.props.match.params.id)
      .then(() => {
        this.setState({ deleted: true });
      });
  }

  render() {
    const { post } = this.props;

    if (!post) {
      return(
        <div>loading......</div>
      );
    }

    if (this.state.deleted) {
      return(
        <Redirect to="/posts" />
      );
    }

    return(
      <div>
        <h3>{post.name}</h3>
        <h6>{post.breed}</h6>
        <p>age: {post.age}</p>
        <p>gender: {post.sex}</p>
        <Link to="/posts" className="btn btn-primary">Back</Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}>
          Delete Post
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { post: state.posts.post };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);
