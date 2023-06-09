import React, { useState } from "react";
import axios from 'axios'
import { useTitle } from "../components/setTitle";

const TITLE = 'Main Page';

const MainPage = () => {
    const [text, setText] = useState("");

    axios.get('http://127.0.0.1:5000/').then((resp) => {
        const data = resp.data;
        setText(data.text)
    });

    axios.post('http://127.0.0.1:5000/', {
        firstName: 'Fred',
        lastName: 'Flintstone'})
    
    useTitle(TITLE);
    return (
        <div>
            <h1>{ text }</h1>
        </div>
    )
};

export default MainPage;