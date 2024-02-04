import {useState} from "react";

export default function Form({list, setList}) {
    const [inputValue, setInputValue] = useState("");

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
                }>Add
            </button>
        </form>
    );
}