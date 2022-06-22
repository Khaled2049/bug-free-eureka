import React from 'react';
import SearchBar from '../SearchBar';
import { Card, Button } from 'react-bootstrap';
class NewsCard extends React.Component {
  state = { news: [] };

  getNews = (searchedNews) => {
    this.setState({ news: searchedNews });
  };

  renderNews = () => {
    return (
      <div>
        {this.state.news.slice(0, 5).map((d) => {
          return (
            <Card
              className="my-3 mx-auto"
              style={{ width: '50rem' }}
              key={d.publishedAt}
            >
              {/* <Card.Img variant="top" src={d.urlToImage} /> */}
              <Card.Body>
                <Card.Title>
                  <h1>{d.title}</h1>
                </Card.Title>
                <Card.Text>{d.description}</Card.Text>
                <Button href={d.url} variant="primary">
                  Read More
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    );
  };

  render() {
    return (
      <div>
        <SearchBar setNews={this.getNews} />
        {this.renderNews()}
      </div>
    );
  }
}

export default NewsCard;
