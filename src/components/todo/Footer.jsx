import styles from './Footer.module.css';

export default function Footer({list}) {
    return (
        <footer className={styles.main}>
            <div className={styles.completed}>
                <span><b>Completed ToDos : </b> {list.filter((item) => item.status).length}</span>
            </div>
            <div className={styles.total}>
                <span><b>Total ToDos : </b> {list.length}</span>
            </div>
        </footer>
    );
}