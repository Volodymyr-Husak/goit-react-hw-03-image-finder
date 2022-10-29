import { Component } from 'react';
import { ImageGalleryItem } from './ImageGalleryItem';
export class ImageGallery extends Component {
  // KEY = '29882224-53e6cb6eb5c61ad27904c20c4';
  // componentDidUpdate(prevProps, prevState) {
  //   if (prevProps.imageName !== this.props.imageName) {
  //     // alert('ALLLERT');
  //     // console.log('ALLLERT')
  //     fetch(
  //       `https://pixabay.com/api/?q=${this.props.imageName}&page=1&key=${this.KEY}&image_type=photo&orientation=horizontal&per_page=12`
  //     )
  //       .then(res => res.json())
  //       .then(obj => this.props.arrImageWithFetch(obj.hits));
  //     // .then(console.log);
  //   }
  // }
  // console.log()
  render() {
    return (
      <ul className="gallery">
        {/* {this.props.arrImage.map(({id}) => id)} */}
        {this.props.arrImage.map(({ id, webformatURL, largeImageURL, tags}) => {
          return (
            <ImageGalleryItem
              key={id}
              webformatURL={webformatURL}
              largeImageURL={largeImageURL}
              tags={tags}
            />
          );
        })}
        {/* {this.props.arrImage.map(({ id }) => { return <p>{id}</p> })} */}
        {/* <ImageGalleryItem /> */}
      </ul>
    );
  }
}
