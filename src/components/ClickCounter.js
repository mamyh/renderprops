import React from "react";

export default class ClickCounter extends React.Component {
    state = { count: 0 }

    increment = () => {
        this.setState((preState) => ({
            count: preState.count + 1
        }))
    }
    render() {
        const { count } = this.state;
        return (
            <div>
                <button type="button" onClick={this.increment}>Click me {count} times</button>
            </div>
        )
    }
}