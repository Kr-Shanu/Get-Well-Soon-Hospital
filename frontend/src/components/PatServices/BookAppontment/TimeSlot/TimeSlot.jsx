import './TimeSlot.css';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import addPatientBooking from '../../../../Services/addPatientBooking';

function TimeSlot(props) {

    const [selectedButton, setSelectedButton] = useState(null);
    const doctor = props.doctor;
    const patientId = useSelector((state) => state.patient.patientId);

    const handleClick = (buttonId) => {
        setSelectedButton(buttonId);
    };

    const handleSubmit = async (e) => {

        e.preventDefault();
        const slot = selectedButton;
        const body = {
            "patientId": patientId,
            "doctorId": doctor._id,
            "slot": slot,
            "doctorName": doctor.name
        }

        try {
            await addPatientBooking(body);
            console.log(`Booking done for patient`);
        } catch (error) {
            console.log(`Error occured while booking`);
        }
        props.close();
    }

    return (
        <div className='time-slot-body'>
            <div className="time-slot-main-container">
                <div>
                    <h1>Choose Time Slot</h1>
                    <div className="time-slots">
                        <button
                            className={selectedButton === 1 ? 'selected' : ''}
                            onClick={() => handleClick(1)}
                        >
                            <h3>8 - 10 AM</h3><br></br>
                            <p>x seats are left</p>
                        </button>
                        <button
                            className={selectedButton === 2 ? 'selected' : ''}
                            onClick={() => handleClick(2)}
                        >
                            <h3>10 - 12 AM</h3><br></br>
                            <p>x seats are left</p>
                        </button>
                        <button
                            className={selectedButton === 3 ? 'selected' : ''}
                            onClick={() => handleClick(3)}
                        >
                            <h3>12 - 2 PM</h3><br></br>
                            <p>x seats are left</p>
                        </button>
                        <button
                            className={selectedButton === 4 ? 'selected' : ''}
                            onClick={() => handleClick(4)}
                        >
                            <h3>2 - 4 PM</h3><br></br>
                            <p>x seats are left</p>
                        </button>
                    </div>
                    <div className="submit-btn">
                        <button id='close' onClick={() => {props.close()}} >Close Window</button>
                        <button onClick={(e) => {handleSubmit(e)}}>Confirm Selection</button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default TimeSlot;
