import { Component } from 'react';
import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
export class SearchBar extends Component {
  state = {
    imageName: '',
  };

  handleImageNameChange = e => {
    // console.log(e.currentTarget.value);
    this.setState({ imageName: e.currentTarget.value });
    e.currentTarget.value = this.state.imageName;
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.imageName.trim() === '') {
        // alert('Введіть імя зображення');
        toast.warn("Введіть назву зображення");
      return;
    }
    // this.setState({ imageName: e.target.inputImage.value });
    this.props.onFormSubmit(this.state.imageName);
    // e.target.inputImage.value = '';
    this.setState({ imageName: '' });
  };

  render() {
    return (
      <header className="searchbar">
        <form onSubmit={this.handleSubmit} className="form">
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            onChange={this.handleImageNameChange}
            className="input"
            name="inputImage"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.imageName}
          />
        </form>
      </header>
    );
  }
}
