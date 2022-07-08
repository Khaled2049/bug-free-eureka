import React from 'react';
import { InputGroup, FormControl, Card, Button } from 'react-bootstrap';
import newsApi from '../api/newsApi';

type NewsCardProps = {};
type NewsCardState = {
  term: string;
  articles: [];
};
class NewsCard extends React.Component<NewsCardProps, NewsCardState> {
  state: NewsCardState = { term: '', articles: [] };

  renderNews = () => {
    return (
      <div>
        {this.state.articles.slice(0, 5).map((d: any) => {
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

  onSearchChange = async (term: any) => {
    this.setState({ term: term });
    await this.searchNews(term);
  };

  searchNews = async (term: any) => {
    const { data } = await newsApi.get('/everything', {
      params: { q: term },
    });
    this.setState({ articles: data.articles });
    return data;
  };

  render() {
    return (
      <div>
        <form className="d-flex justify-content-center m-5">
          <InputGroup style={{ width: '50%' }}>
            <FormControl
              value={this.state.term}
              onChange={(e) => this.onSearchChange(e.target.value)}
              className="d-flex justify-content-center"
              placeholder="Search for news"
              aria-label="Search"
              aria-describedby="basic-addon2"
            />
          </InputGroup>
        </form>
        {this.renderNews()}
      </div>
    );
  }
}

export default NewsCard;
