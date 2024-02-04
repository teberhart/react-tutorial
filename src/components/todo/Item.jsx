import styles from './Item.module.css';

export default function Item({item}) {
    return (
        <li className={styles.itemContainer}>
            <div className={styles.item}>
                {item.text}
            </div>
            <hr className={styles.line} />
        </li>
    );
}