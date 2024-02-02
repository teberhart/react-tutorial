export default function Fruit({fruit}) {
    let returnValue =
        <li key={fruit.price}>
            {fruit.name} : {fruit.price}€ - Origine {fruit.from} {fruit.available ? <></> : <em>This fruit is currently unavailable</em>}
        </li>;

    return (returnValue);
}