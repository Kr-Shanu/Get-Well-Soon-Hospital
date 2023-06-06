import './DailyCheckUp.css'
import React from 'react'

function DailyCheckup() {

  const handleSubmit = (event) => {
    console.log("Form submitted");
    event.preventDefault();
  }


  return (
    <div className='daily-checkup-body'>

      <div id='heading'>
        <h1>Daily Checkup</h1>
      </div>

      <div className='form-container'>

        <form onSubmit={handleSubmit} action='https://localhost:8080/submitCheckup' method='post'>

          <div className='bmi-section sub-section'>
            <h3>BMI</h3>
            <label htmlFor="height">Height</label><br></br>
            <input name='height' type='number' placeholder='Enter height in cm'></input><br></br>
            <label htmlFor='weight'>Weight</label><br></br>
            <input name='weight' type='number' placeholder='Enter Weight in Kgs'></input><br></br>
            <br></br>
            <div className='vital-check-section'>
              <div>
                <button>My BMI</button>
              </div>
              <div>
                <input name='bmi' type='number' value="0"></input>
              </div>
            </div>
            <br></br>
            <button id='popup-button'>Check BMI index</button>
          </div>

          <div className='blood-pressure-section sub-section'>
            <h3>
              Blood Pressure
            </h3>
            <label htmlFor='systolicPressure'>Systolic Pressure</label><br></br>
            <input name='systolicPressure' placeholder='Enter systolic pressure'></input><br></br>
            <label htmlFor='diastolicPressure'>Diastolic Pressure</label><br></br>
            <input name='diastolicPressure' placeholder='Enter the diastolic processure'></input><br></br>
            <br></br>
            <div className='vital-check-section'>
              <div>
                <button>Status</button>
              </div>
              <div>
                <input name='bloodPressureStatus' value="Click to check"></input>
              </div>
            </div>
            <br></br>
            <button id='popup-button'>Check Blood Pressure Status</button>
          </div>

          <div className='general-info sub-section'>
            <label htmlFor='bloodSugar'>Blood Sugar</label><br></br>
            <input name='bloodSugar' placeholder='Enter your blood sugar in dg/mg'></input><br></br>
            <label htmlFor='calorieIntake'>Calories Intake</label><br></br>
            <input name='calorieIntake' placeholder='Enter calories intake in kcal'></input><br></br>
            <label htmlFor='calorieBurnt'>Calories Burnt</label><br></br>
            <input name='calorieBurnt' placeholder='Enter Calories burnt in kcal'></input>
          </div>
          
          <input id='submit-btn' type='submit'></input>
        </form>
      </div>
    </div>
  )
}

export default DailyCheckup;