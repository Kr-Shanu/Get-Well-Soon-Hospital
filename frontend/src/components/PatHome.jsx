import React from "react";
import '../PatHome.css'
import { Link } from "react-router-dom"

function PatHome() {

    return (
        <div>
            <h1>Welcome Patient! How may we help you</h1>

            <div className="row">
                {/* first aid card */}
                <div className="service">
                    <Link to="/firstAid">
                        <div className="card patHomeCard btn btn-lg" style={{ width: "18rem" }}>
                            <img
                                className="card-img-top"
                                src="https://media.tenor.com/Ou58OPjLMuMAAAAC/mivkbp-first-aid.gif"
                                alt="firstAid">
                            </img>
                            <div className="card-body">
                                <p className="card-text">Learn some basic <em><b>first-Aid</b></em> solutions in medical emergency.</p>
                            </div>
                        </div>
                    </Link>
                </div>


                {/* Daily Checkup and Reports card */}
                <div className="service">
                    <Link to="/dailyCheckup">
                        <div className="card col patHomeCard btn btn-lg" style={{ width: "18rem" }}>
                            <img
                                className="card-img-top"
                                src="https://i.pinimg.com/originals/b4/3d/b7/b43db78f64c8e26fb580bb7f00b66222.gif"
                                alt="dailyCheckUp">
                            </img>
                            <div className="card-body">
                                <p className="card-text">Enter your <em><b>daily</b></em> health report for analysisand examination.</p>
                            </div>
                        </div>
                    </Link>
                    </div>


                {/* Reports and Medicines */}
                <div className="service">
                    <Link to="/reportsAndMedicines">
                        <div className="card col patHomeCard btn btn-lg" style={{ width: "18rem" }}>
                            <img
                                className="card-img-top"
                                src="https://pharmanewsintel.com/images/site/article_headers/_normal/2020-02-25-GettyImages-913088320.png"
                                alt="Medicines"></img>
                            <div className="card-body">
                                <p className="card-text">Get information of earlier medicines and prescriptions.</p>
                            </div>
                        </div>
                    </Link>
                </div>


                {/* Medical emergency */}
                <div className="service">
                    <Link to="/emergency">
                        <div className="card col patHomeCard btn btn-lg" style={{ width: "18rem" }}>
                            <img 
                                className="card-img-top" 
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScjwbLkbImDOfbigy0Zb0NxhxO3_7RThpL_VNkBfj_PHBTSOsE8x3gGAz4hio4waQ1ohM&usqp=CAU" 
                                alt="medicalEmergency"></img>
                            <div className="card-body">
                                <p className="card-text">Contact us in case of any medical emergency and urgent care.</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>

    );
}

export default PatHome;