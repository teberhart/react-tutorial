import {useState} from "react";

export default function ComplexCounter() {
    const [incValue, setIncValue] = useState(1);
    const [counter, setCounter] = useState(0);

    function incValueMinus() {
        setIncValue(incValue - 1);
    }
    function incValuePlus() {
        setIncValue(incValue + 1);
    }

    function counterMinus() {
        setCounter(counter - incValue);
    }

    function counterPlus() {
        setCounter(counter + incValue);
    }

    return (
        <div>
            <div>
                <h2>The increment value is : {incValue}</h2>
                <button onClick={incValueMinus}>Decrease</button>
                <button onClick={incValuePlus}>Increase</button>
            </div>
            <div>
                <h2>The counter value is {counter}</h2>
                <button onClick={counterMinus}>Counter - {incValue}</button>
                <button onClick={counterPlus}>Counter + {incValue}</button>
            </div>
        </div>
    );
}