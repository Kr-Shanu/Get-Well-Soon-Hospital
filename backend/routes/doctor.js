const express = require('express');
const router = express.Router();

const addNewDoctor = require('../Controllers/addNewDoctor');
const getAllDoctors = require('../Controllers/getAllDoctors');
const getPatientsList = require('../Controllers/DoctorController/getPateintsList');



// route to get all doctors
router.get('/allDoctors', async (req, res, next) => {
    const docInfo = await getAllDoctors();
    res.status(200).send(docInfo);
});


router.post('/addDoctor', async (req, res, next) => {

    const data = req.body;
    console.log(req.body);

    // Adding validation
    if (!data.name || !data.age || !data.password || !data.phoneNumber || !data.qualification || !data.specialisation || !data.city) {
        return res.status(400).json({
            error: 'Missing required fields'
        });
    }

    try {
        await addNewDoctor(data);
        res.status(200).json({
            success: `Doctor Added Successfully`
        })
    }
    catch (error) {
        console.log(`Error occured: ${error}`);
        res.status(500).json({
            error: `Problem in adding the new Doctor`
        })
    }
})

// router to get all the patients 
router.get('/getAllPatients', async(req, res, next) => {

    // console.log(`Data at router: ${req.body}`);
    var doctorId = req.query.doctorId;

    console.log(`Doctor id at router: ${doctorId}`);
    if(!doctorId) {
        doctorId = req.body.doctorId;
        try {
            const patientlist = await getPatientsList(doctorId);
            res.status(200).send(patientlist);
        } catch (error) {
            res.status(500).json({
                "error": error
            });
        }
    }
    else {
        try {
            const patientlist = await getPatientsList(doctorId);
            res.status(200).send(patientlist);
        } catch (error) {
            res.status(500).json({
                "error": error
            });
        }
    }
});

module.exports = router;