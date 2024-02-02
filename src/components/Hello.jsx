function Hello({person}) {
    return <div className="Hello">
        <h1>{person.greeting} {person.name}</h1>
    </div>;
}

export default Hello;