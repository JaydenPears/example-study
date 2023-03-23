import React, { useState } from "react";
import axios from 'axios'
import { useTitle } from "../components/setTitle";

const TITLE = 'Second Page';

const SecondPage = () => {
    const [text, setText] = useState("");

    axios.get('http://127.0.0.1:5000/page').then((resp) => {
        const data = resp.data;
        setText(data.text)
    });

    useTitle(TITLE);
    return (
        <div>
            <h1>{text}</h1>
        </div>
    )
};

export default SecondPage;