import React from "react";
// import { Link } from "react-router-dom";
import firstAids from "../../firstaidInfo";
import Cards from "./cards";

function FirstAid() {

    return (
        <div>
            <h1>First Aid</h1>
            <div className="row">
                {(firstAids.map)(data => {
                    return (
                        <Cards
                            val={data}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default FirstAid;