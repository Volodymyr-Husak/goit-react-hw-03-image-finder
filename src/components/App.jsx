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


export class App extends Component {
  state = {
    imageName: '',
  };

  KEY = '29882224-53e6cb6eb5c61ad27904c20c4';

  componentDidMount() {
    fetch(
      `https://pixabay.com/api/?q=cat&page=1&key=${this.KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then(res => res.json())
      .then(console.log);
  }

  handleFormSubmit = name => {
    // console.log(name);
    this.setState({ imageName: name });
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
        <ImageGallery imageName={this.state.imageName } />
        <ToastContainer
          position="bottom-center"
          autoClose={2000}
          theme="dark"
        />
      </div>
    );
  }
}
