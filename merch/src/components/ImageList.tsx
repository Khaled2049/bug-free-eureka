// import './ImageList.css';
import React from 'react';

type ImageListProps = {
  images: [];
};

type ImageListState = {};

interface IImage {
  description: string;
  id: string;
  urls: any;
}

class ImageList extends React.Component<ImageListProps, ImageListState> {
  renderCards = () => {
    return this.props.images.map(({ description, id, urls }: IImage) => {
      return (
        <div className="card" key={id} style={{ width: '45rem' }}>
          <img
            className="card-img-top"
            src={urls.regular}
            alt="Card image cap"
          />
          <div className="card-body">
            <p className="card-text">{description}</p>
          </div>
        </div>
      );
    });
  };
  render() {
    return <div>{this.renderCards()}</div>;
  }
}

export default ImageList;
