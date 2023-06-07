var express = require('express');
var router = express.Router();

const getAllPatient = require('../Controllers/getAllPatients')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/allPatient', async(req, res, next) => {
  const patInfo = await getAllPatient();
  res.status(200).send(patInfo);
});

module.exports = router;
