import { Component } from 'react';

export class ImageGalleryItem extends Component {
  // componentDidUpdate(prevProps, prevState) {
  //   if (prevProps.imageName !== this.props.imageName) {
  //       alert('ALLLERT');
  //       // console.log('ALLLERT')
  //   }
  // }
  // console.log(this.props.id)
  render() {
    return (
      <li className="gallery-item">
        {/* <p>ITEM</p> */}
        <img src={this.props.webformatURL} alt={this.props.tags} />
      </li>
    );
  }
}
