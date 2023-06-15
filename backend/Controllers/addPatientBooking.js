const Patient = require('../Model/PatModel');

const addPatientBooking = async (body) => {

    try {

        const patientId = body.patientId;
        const patient = await Patient.findById(patientId);

        // create an array object
        const booking = {
            doctorName: body.doctorName,
            doctorId: body.doctorId,
            time: new Date(),
        }

        patient.bookings.push(booking);
        await patient.save();
        console.log(`Patient ${patient.name} booking saved successfully`);
        
    } catch (error) {
        console.log(`Error occurred: ${error}`);
    }
}

module.exports = addPatientBooking;