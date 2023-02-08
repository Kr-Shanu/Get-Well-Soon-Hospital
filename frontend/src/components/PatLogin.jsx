import React, {useState} from "react";

function PatLogin() {

    const [id, setId] = useState("");
    const [pw, setPw] = useState("");

    function handleIdChange(e) {
        var val = e.target.value;
        setId(val);
        console.log(id);
    }

    function handlePwChange(e) {
        var val = e.target.value;
        setPw(val);
        console.log(pw);
    }

    return(
        <div>
            <h2>Patient's Login</h2>
            <div id="box" className="container-fluid">
                <form method="post">
                    <div className="val">
                        <label>Enter ID</label><br></br>
                        <input autoFocus required onChange={handleIdChange} name="username" type={"text"} className="" placeholder="enter id!" ></input><br></br>
                    </div>
                    <div className="val">
                        <label>Enter Password</label><br></br>
                        <input required onChange={handlePwChange} type={"password"} name="username" className="" placeholder="enter password!" ></input><br></br>
                    </div>
                    <div className="val">
                        <button type="submit" className="btn btn-lg btn-info">Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default PatLogin;