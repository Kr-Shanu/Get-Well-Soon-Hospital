import './DoctorListCard.css'
import React from 'react'

function DoctorsListCard(props) {
    
    const name = props.name;
    const image = props.image;

    return (
        <div className='doctor-list-card-body'>

            <div>
                <h2>
                    Dr. {name}
                </h2>
            </div>
            <div>
                <img alt='doctorImg' src={image}></img>
            </div>
        </div>
    )
}

export default DoctorsListCard