import {useState} from "react";
import List from "./List.jsx";
import styles from './Body.module.css';
import Form from "./Form.jsx";

export default function Body({list, setList}) {
    return (
        <div className={styles.form}>
            <Form list={list} setList={setList}/>
            <List list={list}/>
        </div>
    );
}