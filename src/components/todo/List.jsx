import Item from "./Item.jsx";
import styles from './List.module.css';

export default function List({list, setList}) {
    const sortedList = list.slice().sort(
        (a, b) =>
            Number(a.status) - Number(b.status)
    );
    return (
        (list.length > 0) ?
            <ul className={styles.list}>
                {sortedList.map((item) => <Item key={item.text} item={item} list={list} setList={setList}/>)}
            </ul>
        :
            <></>
    );
}