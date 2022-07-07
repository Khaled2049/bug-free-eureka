import React from 'react';
import { createProject } from '../../actions';
import { connect } from 'react-redux';
import ProjectForm from './ProjectForm';

class ProjectCreate extends React.Component {
  onSubmit = (formValues) => {
    this.props.createProject(formValues);
  };

  render() {
    return (
      <div>
        <h3>Add a project</h3>
        <ProjectForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { createProject })(ProjectCreate);
