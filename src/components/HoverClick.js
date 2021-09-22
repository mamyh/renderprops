import React from "react";

export default class HoverClick extends React.Component {
    state = { count: 0 }
    increment = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
    }
    render() {
        const { count } = this.state;
        return (
            <div>
                <p onMouseOver={this.increment}>Hover over me {count} times</p>
            </div>
        )
    }
}