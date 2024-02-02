export default function Fruit({fruit}) {
    let returnValue =
        <li key={fruit.price}>
            {fruit.name} : {fruit.price}€ - Origine {fruit.from}
        </li>;
    if (fruit.price < 1) {
        returnValue = <></>;
    }
    return (returnValue);
}