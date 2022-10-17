import React from 'react';
import { connect } from 'react-redux';
import { fetchNews } from '../../actions';
import './NewsList.css';
import SearchBar from '../SearchBar';
import { getNews } from '../../actions';

class NewsList extends React.Component {
  componentDidMount() {
    this.props.fetchNews();
  }

  renderNews() {
    return this.props.news.articles.map((post) => {
      return (
        <div className="item" key={post.publishedAt}>
          <div className="ui two column grid">
            <div className="row">
              <div
                className="column one wide"
                style={{
                  color: 'red',
                  textAlign: 'center',
                  alignItems: 'center',
                  justifyContent: 'center',
                  display: 'flex',
                  fontSize: '1.5rem',
                }}
              >
                <i className="large middle aligned newspaper icon" />
              </div>
              <div className="fourteen wide column">
                <a
                  target="_blank"
                  href={post.url}
                  style={{ textDecoration: 'none' }}
                >
                  <h2>{post.title}</h2>
                </a>
                <p>{post.description}</p>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }

  onSearchSubmit = async (term) => {
    this.props.getNews(term);
  };

  render() {
    return (
      <div className="ui relaxed divided list" style={{ maxHeight: '50vh' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        {this.props.news.status === 'ok' ? this.renderNews() : 'Loading...'}
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  return { news: state.news };
};

export default connect(mapStatetoProps, { fetchNews, getNews })(NewsList);
