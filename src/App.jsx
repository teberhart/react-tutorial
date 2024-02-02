import Hello from './components/Hello.jsx'
import Fruits from './components/Fruits.jsx'
import Conditional from "./components/Conditional.jsx";
import Message from "./components/Message.jsx";
import Counter from "./components/Counter.jsx";
import ComplexCounter from "./components/ComplexCounter.jsx";
import Form from "./components/Form.jsx";

function App() {
    const personThibaut = {
        greeting: "Bonjour",
        name: "Thibaut"
    }
    const personObi = {
        greeting: "Miaou",
        name: "Obi-Wan"
    }
    return (
        <div className="App">
            <Form />
            <ComplexCounter />
            <Counter />
            <Message />
            <Hello person={personThibaut} />
            <Hello person={personObi} />
            <Fruits />
            <Conditional display={false}/>
        </div>
    )
}

export default App
