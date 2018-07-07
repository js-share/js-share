import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signin extends Component {
  constructor(props) {
    super(props);

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  componentDidMount() {
    // this.props.clearError();
  }

  handleFormSubmit({ username, password }) {
    this.props.signinUser({ username, password }, this.props.history);
  }

  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          autoComplete='off'
          className="form-control"
          type={field.input.name === "password" ? "password" : "text"}
          {...field.input}
        />
      </div>
    );
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Error!</strong> {this.props.errorMessage}
        </div>
      );
    }
  }

  render() {
    const { handleSubmit } = this.props; // this.props.handleSubmit comes from redux form

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit)}>
        <Field autoComplete='off' name='username' label='Username' component={this.renderField} />
        <Field autoComplete='off' name='password' label='Password' component={this.renderField} />
        {this.renderAlert()/*for rendering an error message*/}
        <button type="submit" className="btn btn-primary">Sign in</button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

export default reduxForm({
  form: 'signin' // just an identifier for this form
})(
  connect(mapStateToProps, actions)(Signin)
);
