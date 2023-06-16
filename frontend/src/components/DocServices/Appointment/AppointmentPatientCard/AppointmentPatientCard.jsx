import "./PatientCard.css"
import React from 'react'

function patientCard(props) {

    const name = props.name;
    const schedule = props.schedule;

    return (
        <div className='patient-card-main-section'>

        <div className="patient-card-body">
            {/* for name */}
            <div id="pat-info">   
                <img alt="patImage" src="https://images.healthshots.com/healthshots/en/uploads/2022/06/29194216/doctor-patient.jpg"></img>
                <h3>{name}</h3>
            </div>

            {/* for time and slot */}
            <div id="schedule">
                <p>Schdule is as follows: {schedule}</p>
                <button>Write Prescription</button>
            </div>

            {/* for vital checks */}
            <div id="vitals">
                <button>Check Vitals</button>
            </div>
        </div>

        </div>
    )
}

export default patientCard