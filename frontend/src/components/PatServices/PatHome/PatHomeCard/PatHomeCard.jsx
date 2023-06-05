import './PatHomeCard.css'
import React from 'react'

function PatHomeCard(props) {

    const image = props.image;
    const heading = props.heading;
    const details = props.info;

    return (
        <div className='pat-home-card-container'>

            <div id='heading'>
                <h2>{heading}</h2>
                <img 
                    alt={heading}
                    src={image}
                ></img>
                <p>{details}</p>
            </div>

        </div>
    )
}

export default PatHomeCard;