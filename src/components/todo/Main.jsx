import Header from "./Header.jsx";
import Body from "./Body.jsx";
import List from "./List.jsx";
import Footer from "./Footer.jsx";
import {useState} from "react";

export default function Main() {
    const [list, setList] = useState([]);

    return (
      <div>
          <Header />
          <Body list={list} setList={setList}/>
          <Footer list={list}/>
      </div>
    );
}