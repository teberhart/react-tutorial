import {useState} from "react";
import styles from './Form.module.css';

export default function Form({list, setList}) {
    const [inputValue, setInputValue] = useState("");

    function handleButton(e) {
        e.preventDefault();
        if (!(list.includes(inputValue))) {
            setList([...list,
                {
                    text: inputValue,
                    status: false
                }
            ]);
            setInputValue("");
        } else {
            alert("ToDo list already contains this !")
        }
    }

    return (
        <form className={styles.form}>
            <input
                className={styles.input}
                type="text"
                placeholder="Add a task"
                value={inputValue}
                name="inputValue"
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button
                className={styles.button}
                type="submit"
                onClick={(e) => handleButton(e)
                }>Add
            </button>
        </form>
    );
}