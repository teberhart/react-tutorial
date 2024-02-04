import {useState} from "react";

export default function Form() {
    const [person, setPerson] = useState(
        {
            firstName: "",
            lastName: ""
        }
    );

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <div>
            <h2>Form</h2>
            <form>
                <input type="text" placeholder="First name" value={person.firstName}
                    onChange={(e)=>setPerson({...person,
                        firstName: e.target.value
                })}></input>
                <input type="text" placeholder="Last name" value={person.lastName}
                    onChange={(e) => setPerson({...person,
                        lastName: e.target.value
               })}></input>
                <div>
                    <button onClick={(e) => handleSubmit(e)}>Add</button>
                </div>
            </form>
        </div>
    );
}