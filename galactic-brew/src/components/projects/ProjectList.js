import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProjects, deleteProject } from '../../actions';
import { SearchBar } from './';

class ProjectList extends React.Component {
  componentDidMount() {
    this.props.fetchProjects();
  }

  onDeleteProject = (id) => {
    this.props.deleteProject(id);
  };

  renderAdmin = (project) => {
    if (project.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <Link
            to={`/projects/edit/${project.id}`}
            className="ui button primary"
          >
            EDIT
          </Link>
          {/* <Link
            to={`projects/delete/${project.id}`}
            className="ui button negative"
          >
            DELETE
          </Link> */}
          <button
            onClick={() => this.onDeleteProject(project.id)}
            className="ui button negative"
          >
            DELETE
          </button>
        </div>
      );
    }
  };

  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: 'right' }}>
          <Link className="ui button primary" to="/projects/new">
            Create Project
          </Link>
        </div>
      );
    }
  }

  renderProjects() {
    return this.props.projects.map((project) => {
      return (
        <div className="item" style={{ padding: '1rem' }} key={project.id}>
          {this.renderAdmin(project)}
          <i className="large middle aligned icon eye" />
          <div className="content">
            <Link
              to={`/projects/${project.id}`}
              style={{ padding: '1px' }}
              className="header"
            >
              {project.title}{' '}
            </Link>
            <div className="description">{project.description}</div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <h2>Projects</h2>
        <SearchBar />
        <div className="ui celled list">{this.renderProjects()}</div>
        {this.renderCreate()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    projects: Object.values(state.projects),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { fetchProjects, deleteProject })(
  ProjectList
);
