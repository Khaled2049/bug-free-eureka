import React from 'react';
import { connect } from 'react-redux';
import { fetchProject } from '../../actions';

class ProjectShow extends React.Component {
  componentDidMount() {
    this.props.fetchProject(this.props.match.params.id);
  }

  render() {
    if (!this.props.project) {
      return <div>Loading...</div>;
    }

    const { title, description } = this.props.project;

    return (
      <div className="">
        <h1>{title}</h1>
        <h5>{description}</h5>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { project: state.projects[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchProject })(ProjectShow);
