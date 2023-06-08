// import axios from "axios";
import getAllPatient from "./getAllPatient";

const verifyPassWord = async (phoneNumber, pw) => {

    const data = await getAllPatient();
    for(let i = 0; i < data.length; i++) {
        if(data[i].phoneNumber === phoneNumber && data[i].password === pw) 
            return true;
    }
    return false;

}

export default verifyPassWord;