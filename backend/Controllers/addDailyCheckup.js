const Patient = require('../Model/PatModel')
const dailyCheckupSchema = require('../Model/PatientInfoSchemas/dailyCheckUp');

const addDailyCheckUp = async (body) => {

    const bmi = body.weight / ((body.height / 100) * (body.height / 100));

    try {
        const patientId = body.patientId;
        const patient = await Patient.findById(patientId);

        const vitals = new dailyCheckupSchema({

            height: body.height,
            weight: body.weight,
            bmi: bmi,
            systolicPressure: body.systolicPressure,
            diastolicPressure: body.diastolicPressure,
            bloodSugar: body.bloodSugar,
            caloriesIntake: body.caloriesIntake,
            caloriesBurnt: body.caloriesBurnt
        });

        patient.dailyCheckup.push(vitals);
        await patient.save();
    }
    catch (error) {
        console.log(`Error occured: ${error}`);
    }
}

module.exports = addDailyCheckUp;