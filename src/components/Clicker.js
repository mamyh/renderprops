import React from "react";

export default class Clicker extends React.Component {
    state = {
        count: 0
    }

    incrementCounter = () => {
        this.setState((preState) => ({
            count: preState.count + 1
        }))
    }

    render() {
        const { myFn } = this.props;
        const { count } = this.state;
        return myFn(count, this.incrementCounter);
    }
}