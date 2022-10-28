import { Component } from 'react';

export class ImageGalleryItem extends Component {
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.imageName !== this.props.imageName) {
        alert('ALLLERT');
        // console.log('ALLLERT')
    }
  }
  render() {
    return (
      <li className="gallery-item">
        <p>ITEM</p>
        <img src="" alt="" />
      </li>
    );
  }
}
