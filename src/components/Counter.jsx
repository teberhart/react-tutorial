import {useState} from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    function handleClickMinus() {
        setCount(count - 1);
    }
    function handleClickMinusFive() {
        setCount(count - 5);
    }
    function handleClickPlus() {
        setCount(count + 1);
    }
    function handleClickPlusFive() {
        setCount(count + 5);
    }

    return (
        <div>
            <h2>Counter is equal to {count}.</h2>
            <button onClick={handleClickMinusFive}>Count -5</button>
            <button onClick={handleClickMinus}>Count -1</button>
            <button onClick={handleClickPlus}>Count +1</button>
            <button onClick={handleClickPlusFive}>Count +5</button>
        </div>
    );
}
