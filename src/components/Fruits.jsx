import Fruit from './Fruit.jsx'

export default function Fruits() {
    const apple = {
        name: 'Apple',
        price: 1.5,
        from: 'France'
    }
    const banana = {
        name: 'Banana',
        price: 1.12,
        from: 'Vietnam'
    }
    const strawberry = {
        name: 'Strawberry',
        price: 0.22,
        from: 'France'
    }
    const fruits = [
        apple,
        banana,
        strawberry
    ]
    return (
        <div>
            <ul>
                {fruits.map((fruit) => (
                    <Fruit fruit={fruit} />
                ))}
            </ul>
        </div>
    );
}