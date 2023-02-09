import React, {useState, useEffect} from "react";
import patpw from "../pw"
import {useNavigate} from 'react-router-dom'


function PatLogin() {

    const navigate = useNavigate();
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");

    useEffect(()=> {
        console.log("Id change");
        console.log(id);
    },[id]);

    useEffect(() => {
        console.log("Password changed");
        console.log(pw);
    }, [pw]);

    function handleIdChange(e) {
        var val = e.target.value;
        setId(val);
    }

    function handlePwChange(e) {
        var val = e.target.value;
        setPw(val);
    }

    function handleSubmit(event) {

        event.preventDefault();
        if(patpw.get(id) === pw) {
            console.log("Correct password");
            navigate('/success');
        }
        else {
            console.log("Wrong Password");
            return navigate('/failure');
        }
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
                        <button onClick={handleSubmit} type="submit" className="btn btn-lg btn-info">Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default PatLogin;