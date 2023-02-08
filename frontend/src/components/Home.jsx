import { Link } from "react-router-dom"
import React from "react";
import '../Home.css';

function FrontPage() {

    return(
        <div>
            <h1>Welcome to Global Services</h1>
            <img 
            src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/globe-1024.png"
            alt="globe"
            width="10%"
            ></img>
            <br></br>
            <br></br>
            <div className="row">
                <div className="col">
                    <Link to="/doctorLogin">
                        <img className="btn btn-lg btnImg"
                        src="https://cdn2.iconfinder.com/data/icons/covid-19-2/64/30-Doctor-1024.png" 
                        alt="/doctor"
                        width="80%"
                        height="90%"
                        ></img>
                    <h3>Doctor</h3>
                    </Link>
                </div>
                <div className="col">
                    <Link to="/patientLogin">
                        <img className="btn btn-lg btnImg"
                        src="https://cdn0.iconfinder.com/data/icons/covid-19-37/512/Infected-patient-hospital-sick-covid19-coronavirus-covid-19-1024.png" 
                        alt="patient"
                        width="80%"
                        height="90%"
                        ></img>
                        <h3>Patient</h3>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default FrontPage;