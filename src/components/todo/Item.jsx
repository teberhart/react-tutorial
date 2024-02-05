import styles from './Item.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";

export default function Item({item, setList}) {
    return (
        <li className={styles.itemContainer}>
            <div className={styles.item}>
                {item.text}
                <span>
                    <button
                        className={styles.deleteButton}
                    ><FontAwesomeIcon icon={faTrash}/></button>
                </span>
            </div>
            <hr className={styles.line}/>
        </li>
    );
}