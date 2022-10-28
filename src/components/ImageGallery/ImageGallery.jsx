import { Component } from 'react';
import { ImageGalleryItem } from './ImageGalleryItem';
export class ImageGallery extends Component {
  render() {
    return (
      <ul className="gallery">
        <ImageGalleryItem imageName={this.props.imageName }/>
      </ul>
    );
  }
}
