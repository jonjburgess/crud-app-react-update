import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { fetchPost, updatePost, deletePost } from '../actions/index';
import { Link, Redirect } from 'react-router-dom';

/* eslint-disable */

class PostsEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      updated: false
    };
  }

  componentWillMount() {
    this.props.fetchPost(this.props.match.params.id);
  }

  renderInput(field) {
    return(
      <div>
        <input {...field.input} type={field.type} className="form-control" />
        <div>{field.meta.touched ? field.meta.error : ''}</div>
      </div>
    );
  }

  onDeleteClick() {
    this.props.deletePost(this.props.match.params.id)
      .then(() => {
        this.setState({ deleted: true });
      });
  }

  onSubmit(values, dispatch) {
    dispatch(updatePost(values, this.props.match.params.id))
      .then(() => {
        this.setState({ updated: true });
      });
  }

  render() {
    const { handleSubmit } = this.props;

    if (this.state.updated || this.state.deleted) return <Redirect to="/posts" />;

    return(
      <div>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-5">Edit From</h1>
            <a
              className="text-danger"
              onClick={this.onDeleteClick.bind(this)}>
              Delete <i className="fa fa-times" aria-hidden="true"></i>
            </a>
          </div>
        </div>

        <div className="container">
          <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <Field
                name="name"
                component={this.renderInput}
                type="text" />
            </div>

            <div className="form-group">
              <label htmlFor="breed">Breed</label>
              <Field
                name="breed"
                component={this.renderInput}
                type="text" />
            </div>

            <div className="form-group">
              <label htmlFor="age">Age</label>
              <Field
                name="age"
                component={this.renderInput}
                type="number" />
            </div>

            <div className="form-group">
              <label htmlFor="sex">Gender</label>
              <Field
                name="sex"
                component={this.renderInput}
                type="text" />
            </div>

            <Link to="/">Cancel</Link>
            <button type="submit" className="btn btn-primary pull-right">Save</button>
          </form>
        </div>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.name) {
    errors.name = 'Enter a name';
  }

  if (!values.breed) {
    errors.breed = 'Enter breed';
  }

  if (!values.age) {
    errors.age = 'Enter kittens age';
  }

  if (!values.sex) {
    errors.sex = 'Enter kitten gender';
  }

  return errors;
}

function mapStateToProps(state) {
  return { initialValues: state.posts.post };
}

export default connect(
  mapStateToProps,
  { fetchPost, updatePost, deletePost }
)(reduxForm({
  form: 'PostsEditForm',
  validate
})(PostsEdit));
