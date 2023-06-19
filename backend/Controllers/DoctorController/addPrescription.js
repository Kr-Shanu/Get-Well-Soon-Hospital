const Patient = require('../../Model/PatModel');
const Prescription = require('../../Model/PatientInfoSchemas/prescription');

const addPrescription = async (body) => {
    const patId = body.patientId;

    try {
        const patient = await Patient.findById(patId);
        
        if (!patient) {
            throw new Error('Patient not found');
        }

        const prescription = new Prescription({
            disease: body.disease,
            medicines: body.medicines,
            doctorId: body.doctorId,
        });

        patient.prescription.push(prescription); 

        await patient.save();

        return prescription;
    } catch (error) {
        console.log(`Error occurred: ${error}`);
        throw error;
    }
};

module.exports = addPrescription;
