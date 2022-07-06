import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProjects } from '../../actions';

class ProjectList extends React.Component {
  componentDidMount() {
    this.props.fetchProjects();
  }

  renderAdmin = (project) => {
    if (project.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <button className="ui button primary">EDIT</button>
          <button className="ui button negative">DELETE</button>
        </div>
      );
    }
  };

  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: 'right' }}>
          <Link className="ui button primary" to="/projects/new">
            Create PROJECT
          </Link>
        </div>
      );
    }
  }

  renderProjects() {
    return this.props.projects.map((project) => {
      return (
        <div className="item" key={project.id}>
          {this.renderAdmin(project)}
          <i className="large middle aligned icon camera" />
          <div className="content">
            {project.title}
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

export default connect(mapStateToProps, { fetchProjects })(ProjectList);
