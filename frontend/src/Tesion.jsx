import React, { useState } from "react";
import axios from "axios";


function Tension() {

    const [sen, setSen] = useState("");

    function getSentence() {

        axios.get("http://localhost:8080/tension", {crossdomain:true
            }).then(response => {
                console.log(response);
                setSen(response.data);
            });
    }

    return(
        <div>
            <button onClick={getSentence}>Click Tension</button>
            <h1>{sen}</h1>
        </div>
    );
}

export default Tension;