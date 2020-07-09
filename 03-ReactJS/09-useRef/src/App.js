import React, { useRef, useState } from 'react';
import './App.css';
 
export default () => {
    const canvas = useRef();
    const [xVal, setXVal] = useState(0);
    const [yVal, setYVal] = useState(0);
    const [color, setColor] = useState('black');
 
    function drawSquare(color, x, y) {
        const ctx = canvas.current.getContext('2d');
        ctx.fillStyle = color;
        ctx.fillRect(x, y, 25, 25);
    }
 
    return (
        <>
            <canvas className="canvasyk" ref={canvas} height="800" width="1100"/>
            <div>
                <label>X Coordinate (max 1100)</label>
                <input
                    type="number"
                    min="0"
                    max="1100"
                    onChange={e => setXVal(+e.target.value+20)}
                    value={xVal}
                />
            </div>
            <div>
                <label>Y Coordinate (max 800)</label>
                <input
                    type="number"
                    min="0"
                    max="200"
                    onChange={e => setYVal(+e.target.value+20)}
                    value={yVal}
                />
            </div>
            <select
                onChange={e => setColor(e.target.value)}
                value={color}
            >
                <option value="black">black</option>
                <option value="blue">blue</option>
                <option value="red">red</option>
            </select>
            <div>
                <button onClick={() => drawSquare(color, xVal, yVal)}>Draw!</button>
            </div>
        </>
    );
}