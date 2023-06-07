const PatientModel = require('../Model/PatModel')

// I need to get all the patients with an asynchronous function
// and export it.

const getAllPatient = async () => {

    try {
        const patInfo = await PatientModel.find();
        console.log(`Patient info are as follows: ${patInfo}`);
        return patInfo;
    }
    catch(error) {
        console.log(`Error encountered: ${error}`);
    }
};

module.exports = getAllPatient;