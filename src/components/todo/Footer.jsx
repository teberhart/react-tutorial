export default function Footer({list}) {
    return (
        <footer>
            <div>
                <b>Completed ToDos : </b> {list.filter((item) => item.status).length}
            </div>
            <div>
                <b>Total ToDos : </b> {list.length}
            </div>
        </footer>
    );
}