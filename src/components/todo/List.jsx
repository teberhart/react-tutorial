import Item from "./Item.jsx";
import styles from './List.module.css';

export default function List({list}) {
    return (
        <ul className={styles.list}>
            {list.map((item) => <Item key={item.text} item={item}/>)}
        </ul>
    );
}