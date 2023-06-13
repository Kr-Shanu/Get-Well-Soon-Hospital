import './Prescription.css'
import React from "react";
import PrescriptionCard from './PresciptionCard/PrescriptionCard';

function Prescriptions() {

    return(
        <>
            <h1>Prescriptions</h1>
            <div className='prescription-card-container'>
                <PrescriptionCard/>
            </div>
        </>
    );
}

export default Prescriptions;