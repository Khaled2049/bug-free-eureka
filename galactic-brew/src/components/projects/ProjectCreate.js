import React from 'react';
import { Field, reduxForm } from 'redux-form';

class ProjectCreate extends React.Component {
  renderInput = ({ input, label, meta }) => {
    // console.log(formProps);
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    console.log(className);
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  renderError = ({ touched, error }) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  };
  onSubmit(formValues) {
    console.log(formValues);
  }

  render() {
    return (
      <form
        className="error ui form"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = 'Enter a title';
  }
  if (!formValues.description) {
    errors.description = 'Enter a Description';
  }
  return errors;
};

export default reduxForm({
  form: 'projectCreate',
  validate,
})(ProjectCreate);
