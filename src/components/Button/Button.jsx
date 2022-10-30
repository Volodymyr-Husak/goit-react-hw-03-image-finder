import { Component } from "react";
import propTypes from 'prop-types'; 

export class Button extends Component {
    render() {
        return <button className="Button" onClick={this.props.onClickLoadMore}type="click">Load more</button>
    }
}

Button.propTypes = {
  onClickLoadMore: propTypes.func.isRequired,
};