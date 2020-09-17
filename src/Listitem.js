import React from "react";

 export default function ListItem(props) {

    const counter = props.el;
    const buttonPlusHandler = () => {
        props.counterPlus(props.index);

    }
    const buttonMinusHandler = () => {
        props.counterMinus(props.index);

    }

    return (
        <div>
            <button onClick={buttonMinusHandler}>-</button>
            {counter}
            <button onClick={buttonPlusHandler}>+</button>
        </div>

    );
}


