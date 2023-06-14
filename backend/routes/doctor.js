const express = require('express');
const router = express.Router();

const addNewDoctor = require('../Controllers/addNewDoctor');
const getAllDoctors = require('../Controllers/getAllDoctors');


// route to get all doctors
router.get('/allDoctors', async (req, res, next) => {
    const docInfo = await getAllDoctors();
    res.status(200).send(docInfo);
});


router.post('/addDoctor', async (req, res, next) => {

    const data = req.body;
    console.log(req.body);

    // Adding validation
    if (!data.name || !data.age || !data.password || !data.phoneNumber || !data.qualification || !data.specialisation) {
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

module.exports = router;