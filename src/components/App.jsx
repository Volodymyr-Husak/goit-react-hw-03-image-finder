// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };

import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { SearchBar } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';

export class App extends Component {
  state = {
    imageName: '',
    arrImage: [],
    page: 1,
  };

  KEY = '29882224-53e6cb6eb5c61ad27904c20c4';
  componentDidUpdate(prevProps, prevState) {
    if (prevState.imageName !== this.state.imageName || prevState.page !== this.state.page) {
      fetch(
        `https://pixabay.com/api/?q=${this.state.imageName}&page=${this.state.page}&key=${this.KEY}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(res => res.json())
        .then(obj => {
          if (this.state.arrImage.length > 0) {
            this.setState(prevState => {
                return { arrImage: [...prevState.arrImage, ...obj.hits] };    
            });
          } else {
            this.setState({ page: 1 });
            this.setState({ arrImage: obj.hits });
          }
        });
    }
  }

  handleFormSubmit = name => {
    this.setState({ imageName: name });
    this.setState({ arrImage: [] });

  };
  // arrImageWithFetch = arr => {
  //   this.setState({ arrImage: arr });
  // };

  onClickLoadMore = e => {
    e.preventDefault();
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          // display: 'flex',
          // justifyContent: 'center',
          // alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <SearchBar onFormSubmit={this.handleFormSubmit} />
        <ImageGallery
          imageName={this.state.imageName}
          arrImageWithFetch={this.arrImageWithFetch}
          arrImage={this.state.arrImage}
        />
        {this.state.arrImage.length > 0 && (
          <Button onClickLoadMore={this.onClickLoadMore} />
        )}
        <ToastContainer
          position="bottom-center"
          autoClose={2000}
          theme="dark"
        />
      </div>
    );
  }
}
