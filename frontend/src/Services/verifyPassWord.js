import getAllPatient from "./getAllPatient.js";

const verifyPassWord = async (phoneNumber, pw) => {
    const data = await getAllPatient();
    let found = false;

    data.forEach((patient) => {
        if (patient.phoneNumber === phoneNumber && patient.password === pw) {
            found = true;
        }
    });

    return found;
};


export default verifyPassWord;
