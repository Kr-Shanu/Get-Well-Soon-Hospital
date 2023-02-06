import React, { useState } from "react";
import axios from "axios";

function Quotes() {

    const[text, setText] = useState("");
    const[author, setAuthor] = useState("");

    function getQuotes() {

        axios.get("http://localhost:8080/", {crossdomain:true
            }).then(response => {
                setText(response.data.text);
                setAuthor(response.data.author);
            });
    }


    return (
        <div>
            <button onClick={getQuotes}>
                Generate Quotes
            </button>
            <h1>{text}</h1>
            <h3>{"-"+author}</h3>
        </div>
    );
}

export default Quotes;
