import React from "react";
import '../Login.css'

function DocLogin() {

    return (
        <div>
            <h2>Doctor's Login</h2>
            <div id="box" className="container-fluid">
                <form method="post">
                    <div className="val">
                        <label>Enter ID</label><br></br>
                        <input autoFocus required name="username" type={"text"} className="" placeholder="enter id!" ></input><br></br>
                    </div>
                    <div className="val">
                        <label>Enter Password</label><br></br>
                        <input required type={"password"} name="username" className="" placeholder="enter password!" ></input><br></br>
                    </div>
                    <div className="val">
                        <button type="submit" className="btn btn-lg btn-info">Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default DocLogin;