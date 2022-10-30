import { Component } from 'react';

export class ImageGalleryItem extends Component {
  render() {
    return (
      <li className="ImageGalleryItem" onClick={this.props.onClickImage} id={this.props.id}>
        <img className="ImageGalleryItem-image" src={this.props.webformatURL} alt={this.props.tags} />
      </li>
    );
  }
}
