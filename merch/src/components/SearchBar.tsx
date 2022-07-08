import React from 'react';

type SearchBarProps = {
  onSubmit: Function;
};

type SearchBarState = {
  term: string;
};

class SearchBar extends React.Component<SearchBarProps, SearchBarState> {
  state: SearchBarState = { term: '' };

  onFormSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="">
        <form onSubmit={this.onFormSubmit} className="">
          <div className="">
            <label>Image Search</label>
            <input
              className="form-control"
              type="search"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
