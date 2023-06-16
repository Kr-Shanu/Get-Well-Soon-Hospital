const Patient = require('../../Model/PatModel');
const moment = require('moment');

const getAppointment = async (body) => {

    const docId = body.doctorId;

    try {

        const patient = await Patient.find({ 
            "bookings.doctorId": docId
        });
        return patient;

    } catch (error) {
        console.log(`Error occured: ${error}`);
    }
}

module.exports = getAppointment;