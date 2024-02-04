import {useState} from "react";

export default function Item({item}) {
    const [status, setStatus] = useState(false);

    function handleClick() {
        setStatus(!status);
    }

    return (
        <li className="header">
            {item}
        </li>
    );
}