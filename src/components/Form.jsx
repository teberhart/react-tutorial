import {useState} from "react";

export default function Form() {
    const [firstName, setFirstName] = useState("");

    return (
        <div>
            <h2>Form</h2>
            <form>
                <input type="text" placeholder="First name" value={firstName}
                       onChange={(e)=>setFirstName(e.target.value)}
                ></input>
            </form>
        </div>
    );
}