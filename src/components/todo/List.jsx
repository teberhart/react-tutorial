import Item from "./Item.jsx";

export default function List({list}) {
    return (
        <ul>
            {list.map((item) => <Item key={item} item={item}/>)}
        </ul>
    );
}