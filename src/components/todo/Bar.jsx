import {useState} from "react";
import List from "./List.jsx";

export default function Bar() {
    const [inputValue, setInputValue] = useState("");
    const [list, setList] = useState([]);

    function handleButton(e) {
        e.preventDefault();
        if (!(list.includes(inputValue))) {
            setList([...list,
                inputValue
            ]);
            setInputValue("");
        } else {
            alert("ToDo list already contains this !")
        }
    }

    return (
        <div>
            <form>
                <input
                    type="text"
                    placeholder="Add a task"
                    value={inputValue}
                    name="inputValue"
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button
                    type="submit"
                    onClick={(e) => handleButton(e)
                }>Add</button>
            </form>
            <List list={list}/>
        </div>
    );
}