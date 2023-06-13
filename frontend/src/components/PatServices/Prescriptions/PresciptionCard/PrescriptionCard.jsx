import './PrescriptionCard.css'
import React from 'react'

function PrescriptionCard() {


    return (

        <div className='prescription-main-body'>
            <div className='date'>
                <h1>13th June 2023</h1>
            </div>
            <div className='prescription-card-body'>
                <div id='doctor-name'>
                    <h1>Dr. XYZ</h1>
                </div>
                <div id='details'>
                    <div>
                        <h1>Disease</h1>
                    </div>
                    <div>
                        <p>
                            Diagnosed with such and such
                        </p>
                    </div>
                </div>
                <div id='medicines'>
                    <ul>
                        <li><h4>Medicine A</h4></li>
                        <li><h4>Medicine B</h4></li>
                        <li><h4>Medicine C</h4></li>
                        <li><h4>Medicine D</h4></li>          
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default PrescriptionCard