var express = require('express');
var router = express.Router();

const getAllPatient = require('../Controllers/getAllPatients')
const addNewPatient = require('../Controllers/addNewPatient')
const addDailyCheckUp = require('../Controllers/addDailyCheckup')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/allPatient', async (req, res, next) => {
  const patInfo = await getAllPatient();
  res.status(200).send(patInfo);
});


// routing to add a new patient
router.post('/addPatient', async (req, res, next) => {
  const data = req.body;
  console.log(req.body);

  // Adding validation
  if (!data.name || !data.age || !data.password || !data.phoneNumber) {
    return res.status(400).json({
      error: 'Missing required fields'
    });
  }

  try {
    await addNewPatient(data);
    res.status(200).json({
      success: `Patient Added Successfully`
    })
  }
  catch (error) {
    console.log(`Error occured: ${error}`);
    res.status(500).json({
      error: `Problem in adding the new patient`
    })
  }
});

// route to add daily checkup details
router.post('/addDailyCheckupData', async (req, res, next) => {

  const data = req.body;
  console.log(`data received to add to daily checkup is: ${data}`);
  try {
    await addDailyCheckUp(data);
    res.status(200).json({
      "success": "Data added in the daily checkup section"
    });
  } catch (error) {
    res.status(500).json({
      "failure": `Error occured: ${error}`
    });
  }
});

module.exports = router;
