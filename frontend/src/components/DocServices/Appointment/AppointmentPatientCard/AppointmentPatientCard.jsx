import React, { useEffect, useState } from 'react';
import './PatientCard.css';

function PatientCard(props) {
    const { name, schedule, dailyCheckup, slot } = props;
    const [selected, setSelected] = useState(false);
    const [writePrescription, setWritePrescription] = useState(false);


    const handleVital = () => {
        setSelected(!selected);
    };

    const hanldePrescription = () => {
        setWritePrescription(!writePrescription);
    }

    return (
        <div className="patient-card-main-section">
            <div className="patient-card-body">
                {/* for name */}
                <div id="pat-info">
                    <img
                        alt="patImage"
                        src="https://images.healthshots.com/healthshots/en/uploads/2022/06/29194216/doctor-patient.jpg"
                    />
                    <h3>{name}</h3>
                </div>

                {/* for time and slot */}
                <div id="schedule">
                    <p>Schedule is as follows: {schedule}-2023</p>
                    <p>Slot: {slot}</p>
                    <button onClick={hanldePrescription}>Write Prescription</button>
                </div>

                {/* for vital checks */}
                <div id="vitals">
                    <button id='vital-btn' onClick={handleVital}>Check Vitals</button>
                </div>
            </div>

            {selected && (
                <div className="vital-checks">
                    <h4>Vital Checks:</h4>
                    <ul>
                        {dailyCheckup.slice(0, 5).map((checkup, index) => (
                            <li key={index}>
                                <h3>Date: {checkup.createdAt.slice(0, 10)}</h3>
                                <ul>
                                    <li>BMI: {checkup.bmi}</li>
                                    <li>BP: {checkup.systolicPressure}/{checkup.diastolicPressure}</li>
                                    <li>sugar: {checkup.bloodSugar}</li>
                                    <li>Calories Intake: {checkup.caloriesIntake}</li>
                                    <li>Calories Burnt: {checkup.caloriesBurnt}</li>
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {
                writePrescription && (
                    <div>
                        <h3>Write Prescription down below</h3>
                        <div>
                            <label htmlFor='disease'>Enter Disease</label><br></br>
                            <input type='text' id='disease' name='disease' placeholder='Patients disease'></input>
                        </div>
                        <br></br>
                        <div>
                            <label htmlFor='comments'>Enter comments</label><br></br>
                            <textarea id='comments' name='comments' placeholder='enter comments here'></textarea>
                        </div>
                        <div>
                            <button>Submit</button>
                        </div>
                    </div>
                )
            }

        </div>
    );
}

export default PatientCard;
