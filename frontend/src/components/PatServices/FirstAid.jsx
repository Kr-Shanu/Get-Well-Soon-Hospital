import React from "react";
// import { Link } from "react-router-dom";
import firstAids from "../../firstaidInfo";
// import Cards from "./cards";
import Example from "./firstAidInformation";

function FirstAid() {

    return (
        <>
            <h1>First Aid</h1>
            <div className="row">
                {(firstAids.map)(data => {
                    return (
                        <Example
                            val={data}
                        />
                    );
                })}
            </div>
        </>
    );
}

export default FirstAid;