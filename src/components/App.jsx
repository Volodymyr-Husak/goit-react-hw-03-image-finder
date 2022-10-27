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
export class App extends Component {

  KEY = '29882224-53e6cb6eb5c61ad27904c20c4';
  componentDidMount() {
    fetch(`https://pixabay.com/api/?q=cat&page=1&key=${this.KEY}&image_type=photo&orientation=horizontal&per_page=12`)
      .then(res => res.json())
      .then(console.log)    
  }


  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        React homework template
      </div>
    );
  }
}
