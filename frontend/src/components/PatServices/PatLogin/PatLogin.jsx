import './PatLogin.css'
import React, { useEffect, useState } from 'react'
// import Pass from '../../../elements/pw';
import { useNavigate } from 'react-router-dom';
import verifyPassWord from '../../../Services/verifyPassWord';

function PatLogin() {

    const navigate = useNavigate();

    const [credential, setCredential] = useState([
        "", // id
        ""  // password
    ])

    const handleIdChange = (e) => {

        const value = e.target.value;
        const newCred = [...credential];
        newCred[0] = value;
        setCredential(newCred);
    }

    const handlePwChange = (e) => {

        const value = e.target.value;
        const newCred = [...credential];
        newCred[1] = value;
        setCredential(newCred);
    }

    useEffect(() => {

        console.log("Id = " + credential[0]);
        console.log("Pw = " + credential[1]);

    }, [credential])

    // Handle form submission
    const handleSubmit = (e) => {

        if (verifyPassWord(credential[0], credential[1])) {
            console.log("Password is correct");
            navigate('/success');
        }
        else {
            console.log("Wrong Password");
            return navigate('/failure');
        }
    }



    return (
        <div className='pat-login-main-container'>
            <h1>Please Login!</h1>
            <div className='login-form-container'>
                <div>
                    <label htmlFor='number'>Phone</label><br></br>
                    <input onChange={(e) => handleIdChange(e)} name='number' type='number' placeholder='Enter your Phone number'></input><br></br>
                </div>
                <div>
                    <label htmlFor='password'>Password</label><br></br>
                    <input onChange={(e) => handlePwChange(e)} name='password' type='password' placeholder='Enter your password/dob'></input>
                </div>
            </div>
            <div id='login-btn'>
                <button onClick={(e) => handleSubmit(e)}>Login</button>
            </div>
        </div>
    )
}

export default PatLogin