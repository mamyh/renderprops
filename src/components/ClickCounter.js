import React from "react";
import withClicker from "./HOC/withClicker";

function ClickCounter({ count, increment }) {
    return (
        <div>
            <button type="button" onClick={increment}>Click me {count} times</button>
        </div>
    )
}

export default withClicker(ClickCounter);