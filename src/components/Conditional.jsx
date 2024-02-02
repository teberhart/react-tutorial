import Welcome from "./Welcome.jsx";
import Code from "./Code.jsx";

export default function Conditional({display}) {
    return (display ? <Welcome /> : <Code />);
}