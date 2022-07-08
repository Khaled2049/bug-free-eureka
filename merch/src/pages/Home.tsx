import React from 'react';
import { Button } from 'react-bootstrap';
import { FaInstagram, FaFacebookSquare, FaYoutube } from 'react-icons/fa';
import Searchbar from '../components/SearchBar';
import unsplash from '../api/unsplash';
import ImageList from '../components/ImageList';

type HomeProps = {
  name: string;
};

type HomeState = {
  images: [];
};

class Home extends React.Component<HomeProps, HomeState> {
  state: HomeState = { images: [] };

  onSearchSubmit = async (term: string) => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term },
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1 className="display-4">Hello, world!</h1>
          <p className="lead">
            My name is {this.props.name} and I'm a photographer.{' '}
          </p>
          <hr className="my-4" />
          <div className="d-flex justify-content-center">
            <FaInstagram size="3rem" className="m-2" />
            <FaFacebookSquare size="3rem" className="m-2" />
            <FaYoutube size="3rem" className="m-2" />
          </div>
          <p className="lead">
            <Button variant="success">See More</Button>{' '}
          </p>
          <Searchbar onSubmit={this.onSearchSubmit} />
          <div
            className="d-flex mt-4 justify-content-center overflow-auto container"
            style={{ maxHeight: '50vh' }}
          >
            <ImageList images={this.state.images} />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
