import React from "react";
import '../../cards.css'

function Cards(props) {

    const data = props.val;
    console.log("received data");
    console.log(data);

    return (
        <div className="firstAidCard">
            <div className="card patHomeCard btn btn-lg" style={{ width: "18rem" }}>
                <img
                    className="card-img-top"
                    src={data.img_src}
                    alt="firstAid">
                </img>
                <div className="card-body">
                <h3>{data.name}</h3>
                    <p className="card-text">{data.information.substring(0, 80)}</p>
                </div>
            </div>
        </div>
    );
}

export default Cards;