import { Component } from 'react';
import { toast } from 'react-toastify';
import propTypes from 'prop-types'; 

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
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit} >
          <button className="SearchForm-button" type="submit" >
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input className="SearchForm-input"
            onChange={this.handleImageNameChange}
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

SearchBar.propTypes = {
  onFormSubmit: propTypes.func.isRequired,
};