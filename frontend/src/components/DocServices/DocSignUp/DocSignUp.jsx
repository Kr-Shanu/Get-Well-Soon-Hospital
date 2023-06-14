import './DocSignUp.css'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import addNewDoctor from '../../../Services/addNewDoctor';

function DocSignUp() {

  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",  // for name
    email: "",  // email,
    password: "",  // password
    age: null,   // age
    phoneNumber: null, // phone number
    qualification: "", // qualification
    specialisation: "",   // specialisation
  });

  useEffect(() => {
    console.log("New values: ", data);
  }, [data])

  const submitResponse = (e) => {

    e.preventDefault();

    try {
      addNewDoctor(data);
      console.log(`doctor added successfully`);
      navigate('/docLogin');
    }
    catch (error) {
      console.log(`Error occured: ${error}`);
      navigate('/failure');
    }
  }

  const handleChange = (e) => {

    const change = e.target.name, value = e.target.value;;

    switch (change) {
      case "name": setData((prev) => ({
        ...prev,
        "name": value
      }));
        break;
      case "email": setData((prev) => ({
        ...prev,
        "email": value
      }));
        break;
      case "password": setData((prev) => ({
        ...prev,
        "password": value
      }));
        break;
      case "age": setData((prev) => ({
        ...prev,
        "age": value
      }));
        break;
      case "phoneNumber": setData((prev) => ({
        ...prev,
        "phoneNumber": value
      }));
        break;
      case "qualification": setData((prev) => ({
        ...prev,
        "qualification": value
      }));
        break;
      case "specialisation": setData((prev) => ({
        ...prev,
        "specialisation": value
      }));
        break;
      default:
        console.log("Wrong choince");
    }
  }



  return (
    <div className='signup-main-container'>

      <div>
        <h1>
          Enter the required Details
        </h1>
      </div>

      <div className='form-container'>

        <div>
          <label htmlFor='name'>
            Name
          </label><br></br>
          <input
            type='text'
            name='name'
            placeholder='Enter Your Name'
            onChange={handleChange}>
          </input>
        </div>

        <div>
          <label htmlFor='email'>
            Email
          </label><br></br>
          <input
            type='email'
            name='email'
            placeholder='Enter Your Email'
            onChange={handleChange}>
          </input>
        </div>

        <div>
          <label htmlFor='password'>
            Password
          </label><br></br>
          <input
            type='password'
            name='password'
            placeholder='Enter a password'
            onChange={handleChange}>
          </input>
        </div>

        <div>
          <label htmlFor='age'>
            Age
          </label><br></br>
          <input
            type='number'
            name='age'
            placeholder='Enter Your Age'
            onChange={handleChange}>
          </input>
        </div>

        <div>
          <label htmlFor='phoneNumber'>
            Phone Number
          </label><br></br>
          <input
            type='number'
            name='phoneNumber'
            placeholder='Enter Phone Number'
            onChange={handleChange}>
          </input>
        </div>

        <div>
          <label htmlFor='qualification'>
            Qualification
          </label><br></br>
          <input
            type='text'
            name='qualification'
            placeholder='Enter your qualification'
            onChange={handleChange}>
          </input>
        </div>

        <div>
          <label htmlFor='specialisation'>
            Specialisation
          </label><br></br>
          <input
            type='text'
            name='specialisation'
            placeholder='Enter your specialisation'
            onChange={handleChange}>
          </input>
        </div>

        <div id='submit-btn'>
          <button
            onClick={(e) => { submitResponse(e) }}>
            Submit
          </button>
        </div>

      </div>

    </div>
  )
}

export default DocSignUp;