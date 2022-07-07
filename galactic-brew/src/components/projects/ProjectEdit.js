import React from 'react';
import { connect } from 'react-redux';
import { editProject, fetchProject } from '../../actions';
import ProjectForm from './ProjectForm';
import _ from 'lodash';
class ProjectEdit extends React.Component {
  componentDidMount() {
    this.props.fetchProject(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    this.props.editProject(this.props.match.params.id, formValues);
  };
  render() {
    if (!this.props.project) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h3>Edit A project</h3>
        <ProjectForm
          initialValues={_.pick(this.props.project, 'title', 'description')}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { project: state.projects[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchProject, editProject })(
  ProjectEdit
);
