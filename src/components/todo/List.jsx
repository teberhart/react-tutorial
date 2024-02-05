import Item from "./Item.jsx";
import styles from './List.module.css';

export default function List({list, setList}) {
    return (
        (list.length > 0) ?
            <ul className={styles.list}>
                {list.map((item) => <Item key={item.text} item={item} setList={setList}/>)}
            </ul>
        :
            <></>
    );
}