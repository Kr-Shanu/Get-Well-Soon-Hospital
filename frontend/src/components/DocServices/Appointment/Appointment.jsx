import './Appointment.css';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PatientCard from './AppointmentPatientCard/AppointmentPatientCard';
import getAllAppointments from '../../../Services/getAllAppointments';

function Appointment() {
    const doctorId = useSelector((state) => state.doctor.doctorId);
    console.log(`Doctor id after rendering: ${doctorId}`);

    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        if(appointments) {
            console.log(`aappointments are: ${appointments}`);
        }
    }, [appointments])

    useEffect(() => {

        const fetchAppointments = async () => {
            try {
                const data = await getAllAppointments({
                    "doctorId": doctorId,
                });
                setAppointments(data);
                console.log('Appointments fetched successfully:', data);
            } catch (error) {
                console.log('Error fetching appointments:', error);
            }
        };

        fetchAppointments();
    }, [doctorId]);

    return (
        <div className="appointment-main-container">
            <div>
                <h1>Appointment</h1>
            </div>

            {appointments.length > 0 ? (
                <div className="patient-card-holder">
                    {appointments.map((data) => (
                        <PatientCard
                            key={data._id}
                            name={data.name}
                            schedule={data.bookings.appointmentDay}
                        />
                    ))}
                </div>
            ) : (
                <div>No appointments found</div>
            )}
        </div>
    );
}

export default Appointment;
