export default function Message() {
    return (
        <div>
            <button onClick={handleClick}>Click here for a surprise (in console)</button>
        </div>
    );
}

function handleClick() {
    console.log("Button has been clicked")
}