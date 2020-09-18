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
            <button onClick={buttonMinusHandler}>-1</button>
            <button onClick={buttonMinusHandler}>-2</button>
            <button onClick={buttonMinusHandler}>-3</button>
            {counter}
            <button onClick={buttonPlusHandler}>+</button>
        </div>

    );
}


