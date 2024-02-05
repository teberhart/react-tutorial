import styles from './Item.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";

export default function Item({item, list, setList}) {
    function handleDelete(item) {
        setList(list.filter((todo)=> todo !== item));
    }

    function handleToggle(item) {
        //console.log("Status toggle for item ", item.text)
        const newList = list.map(
            (todo) => todo === item ?
                {...todo, status: !(todo.status)} :
                todo
        );
        setList(newList);
    }

    return (
        <li className={styles.itemContainer}>
            <div className={styles.item}>
                <span onClick={() => handleToggle(item)} className={item.status ? styles.itemDone : ""}>
                    {item.text}
                </span>
                <span>
                    <button
                        className={styles.deleteButton}
                        onClick={() => handleDelete(item)}
                    ><FontAwesomeIcon icon={faTrash}/></button>
                </span>
            </div>
            <hr className={styles.line}/>
        </li>
    );
}