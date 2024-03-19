import React, { useState } from 'react';

const Calculator = () => {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');

    const handleButtonClick = (value) => {
        if (value === '=') {
            if (input.trim() === '') {
                setOutput('Error');
                return;
            }
            try {
                const result = eval(input);
                setOutput(result);
            } catch (error) {
                setOutput('Error');
            }
        } else if (value === 'C') {
            setInput('');
            setOutput('');
        } else {
            setInput(prevInput => prevInput + value);
        }
    };

    return (
        <div className="calculator">
            <h1>React Calculator</h1>
            <input className="input-bar" type="text" value={input} readOnly />
            <div className="result">{output}</div>
            <div className="buttons">
                <button onClick={() => handleButtonClick(7)}>7</button>
                <button onClick={() => handleButtonClick(8)}>8</button>
                <button onClick={() => handleButtonClick(9)}>9</button>
                <button onClick={() => handleButtonClick('+')}>+</button>
                <button onClick={() => handleButtonClick(4)}>4</button>
                <button onClick={() => handleButtonClick(5)}>5</button>
                <button onClick={() => handleButtonClick(6)}>6</button>
                <button onClick={() => handleButtonClick('-')}>-</button>
                <button onClick={() => handleButtonClick(1)}>1</button>
                <button onClick={() => handleButtonClick(2)}>2</button>
                <button onClick={() => handleButtonClick(3)}>3</button>
                <button onClick={() => handleButtonClick('*')}>*</button>
                <button onClick={() => handleButtonClick('C')}>C</button>
                <button onClick={() => handleButtonClick(0)}>0</button>
                <button onClick={() => handleButtonClick('=')}>=</button>
                <button onClick={() => handleButtonClick('/')}>/</button>
            </div>
        </div>
    );
}

export default Calculator;