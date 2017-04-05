import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { createPost } from '../actions/index';
import { Link, Redirect } from 'react-router-dom';

class PostsNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      created: false
    };
  };

  renderInput(field) {
    return(
      <div>
        <input {...field.input} type={field.type} />
        <div>{field.meta.touched ? field.meta.error : ''}</div>
      </div>
    );
  }

  onSubmit(values, dispatch, props) {
    dispatch(createPost(values))
      .then(() => {
        this.setState({ created: true });
      })
      .catch(() => {
        console.log('failed to create......');
      });
  };

  render() {
    const { handleSubmit } = this.props;

    if (this.state.created) {
      return(
        <Redirect to="/posts" />
      );
    }

    return(
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Create Form</h3>

        <div className="form-group">
          <label htmlFor="name">Name</label>
          <Field
            name="name"
            component={this.renderInput}
            type="text"
            className="form-control" />
        </div>

        <div className="form-group">
          <label htmlFor="breed">Breed</label>
          <Field
            name="breed"
            component={this.renderInput}
            type="text"
            className="form-control" />
        </div>

        <div className="form-group">
          <label htmlFor="age">Age</label>
          <Field
            name="age"
            component={this.renderInput}
            type="text"
            className="form-control" />
        </div>

        <div className="form-group">
          <label htmlFor="sex">Gender</label>
          <Field
            name="sex"
            component={this.renderInput}
            type="text"
            className="form-control" />
        </div>

        <button type="submit" className="btn btn-primary">Save</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
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

export default reduxForm({
  form: 'PostsNewForm',
  validate
})(PostsNew);
