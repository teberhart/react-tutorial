import {useState} from "react";

export default function Item({item}) {
    return (
        <li className="header">
            {item.text}
        </li>
    );
}