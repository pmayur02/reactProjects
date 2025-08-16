import { useState } from "react";

function ColorPicker() {
    const [color, setColor] = useState("#000");

    function colorHandler(event){
        setColor(event.target.value);
    }
    return(
        <div className="main">
            <h1 className = "heading">Color Picker</h1>
            <h2 className="selectHeader">Color : {color}</h2>
            <div className="colorDisplay" style={{backgroundColor: color}}></div>
            <input  className="inputField"  value={color} onChange={colorHandler} type="color" />

        </div>
    )
}

export default ColorPicker;