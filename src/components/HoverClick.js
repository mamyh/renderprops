import React from "react";
// import withClicker from "./HOC/withClicker";

function HoverClick({ count, increment }) {
    return (
        <div>
            <p onMouseOver={increment}>Hover over me {count} times</p>
        </div>
    )
}

// export default withClicker(HoverClick)
export default HoverClick;
