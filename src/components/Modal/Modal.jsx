import { Component } from 'react';
import propTypes from 'prop-types'; 

export class Modal extends Component {
  render() {
    return (
      <div onClick={this.props.closeModalClickBackdrop} className="Overlay">
        <div className="Modal">
          <img
            src={this.props.currentImage.largeImageURL}
            alt={this.props.currentImage.tags}
          />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  closeModalClickBackdrop: propTypes.func.isRequired,
  currentImage: propTypes.object.isRequired,
};