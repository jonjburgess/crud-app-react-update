import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions/index';
import { Link, Redirect } from 'react-router-dom';

class PostsShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deleted: false
    };
  }

  componentWillMount() {
    this.props.fetchPost(this.props.match.params.id);
  }

  render() {
    const { post } = this.props;

    if (!post) return false;
    if (this.state.deleted) return <Redirect to="/posts" />;

    return(
      <div>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-3">{post.name}</h1>
            <p className="lead">{post.breed}</p>
          </div>
        </div>

        <div className="container">
          <ul className="list-group mb-4">
            <li className="list-group-item">age: {post.age}</li>
            <li className="list-group-item">gender: {post.sex}</li>
          </ul>

          <Link to="/posts">Back</Link>
          <Link to={`/edit/${this.props.match.params.id}`} className="btn btn-primary pull-right">Edit</Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { post: state.posts.post };
}

export default connect(mapStateToProps, { fetchPost })(PostsShow);
