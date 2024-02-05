import styles from './Item.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";

export default function Item({item, list, setList}) {
    function handleDelete(text) {
        setList(list.filter((todo)=> todo.text !== text));
    }

    return (
        <li className={styles.itemContainer}>
            <div className={styles.item}>
                {item.text}
                <span>
                    <button
                        className={styles.deleteButton}
                        onClick={() => handleDelete(item.text)}
                    ><FontAwesomeIcon icon={faTrash}/></button>
                </span>
            </div>
            <hr className={styles.line}/>
        </li>
    );
}