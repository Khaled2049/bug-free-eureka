import React from 'react';
import { connect } from 'react-redux';
import { fetchNews } from '../../actions';

class NewsList extends React.Component {
  componentDidMount() {
    this.props.fetchNews();
  }

  renderNews() {
    console.log(this.props.news);
    return this.props.news.articles.map((post) => {
      return (
        <div className="item" key={post.publishedAt}>
          <div className="ui row">
            <div className="column wide">
              <i className="large middle aligned newspaper icon" />
            </div>
            <div className="column eight wide">
              <h2>{post.title}</h2>
              <p>{post.description}</p>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="ui relaxed divided list">
        {this.props.news.status === 'ok' ? this.renderNews() : 'Loading...'}
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  return { news: state.news };
};

export default connect(mapStatetoProps, { fetchNews })(NewsList);
