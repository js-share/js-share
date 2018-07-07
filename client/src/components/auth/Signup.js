import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import {connect} from 'react-redux';
import * as actions from '../../actions';


class Signup extends Component {
  constructor(props) {
    super(props);
    
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  
  componentDidMount() {
    this.props.clearError();
  }
  
  handleFormSubmit(values) {
    // Call action creator to sign up the user
    this.props.signupUser(values, this.props.history);
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
  
  renderField(field) {
    const {meta: {touched, error}} = field;
    
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          type={field.input.name === "password" || field.input.name === "passwordConfirm" ? "password" : "text"}
          {...field.input}
        />
        {touched && error && <div className="error">{error}</div>}
      </div>
    );
  }
  
  render() {
    const {handleSubmit} = this.props;
    
    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit)}>
        <Field name='username' label='Username' component={this.renderField} />
        <Field name='password' label='Password' component={this.renderField} />
        <Field name='passwordConfirm' label='Confirm Password' component={this.renderField} />
        {this.renderAlert()}
        <button type="submit" className="btn btn-primary">Sign up!</button>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};
  
  if (!values.email) {
    errors.email = 'Please enter an email';
  }
  if (!values.password) {
    errors.password = 'Please enter a password';
  }
  if (!values.passwordConfirm) {
    errors.passwordConfirm = 'Please enter a password confirmation';
  }
  // matching passwords
  if (values.password !== values.passwordConfirm) {
    errors.password = 'Passwords must match';
  }
  
  return errors;
}

function mapStateToProps(state) {
  return {errorMessage: state.auth.error};
}

export default reduxForm({
  validate,
  form: 'signup',
})(
  connect(mapStateToProps, actions)(Signup)
);

