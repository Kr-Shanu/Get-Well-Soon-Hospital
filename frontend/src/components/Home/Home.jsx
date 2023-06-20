import './Home.css'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {

    const navigate = useNavigate();


    return (
        <div className='home-main-container'>

            <div>
                <h1>
                    Get Well Soon Hospital
                </h1>
            </div>
            <div>
                <img
                    id='hosp-logo'
                    alt='globe'
                    src='https://nifla.org/wp-content/uploads/2012/11/nursing-logo-2.png'
                >
                </img>
            </div>
            <div className='navigatingg-logos'>
                <div id='doc' onClick={() => {navigate('/docLogin')}}>
                    <img
                        id='doc-logo'
                        alt='doctor'
                        src='https://cdn2.iconfinder.com/data/icons/covid-19-2/64/30-Doctor-1024.png'
                        >
                    </img>
                </div>
                <div id='pat' onClick={() => {navigate('/patientLogin')}}>
                    <img
                        id='pat-logo'
                        alt='patient'
                        src='https://cdn0.iconfinder.com/data/icons/covid-19-37/512/Infected-patient-hospital-sick-covid19-coronavirus-covid-19-1024.png'
                    >
                    </img>
                </div>
            </div>
        </div>
    )
}

export default Home