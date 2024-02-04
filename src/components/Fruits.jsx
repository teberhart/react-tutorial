import Fruit from './Fruit.jsx'

export default function Fruits() {
    const apple = {
        name: 'Apple',
        price: 1.5,
        from: 'France',
        available: true
    }
    const banana = {
        name: 'Banana',
        price: 1.12,
        from: 'Vietnam',
        available: false
    }
    const strawberry = {
        name: 'Strawberry',
        price: 0.22,
        from: 'France',
        available: true
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
                    <Fruit key={fruit.name} fruit={fruit} />
                ))}
            </ul>
        </div>
    );
}