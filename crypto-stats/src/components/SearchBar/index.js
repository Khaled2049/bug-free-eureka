import React from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';
import newsApi from '../../apis/newsApi';

class SearchBar extends React.Component {
  state = { term: '', articles: [] };
  componentDidMount() {
    this.searchNews('BTC');
  }

  onSearchChange = async (term) => {
    this.setState({ term: term });
    await this.searchNews(term);
  };

  searchNews = async (term) => {
    const { data } = await newsApi.get('/everything', {
      params: { q: term },
    });
    this.setState({ articles: data.articles });
    this.props.setNews(this.state.articles);
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
      </div>
    );
  }
}

export default SearchBar;
