import { Component } from "react";

export class Button extends Component {
    render() {
        return <button onClick={this.props.onClickLoadMore}type="click">Load more</button>
    }
}