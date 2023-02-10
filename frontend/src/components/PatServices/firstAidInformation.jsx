import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import '../../cards.css'

function Example(props) {

    const [show, setShow] = useState(false);
    const data = props.val;

    return (
        <>

            <div className="firstAidCard" onClick={() => setShow(true)}>
                <div className="card patHomeCard btn btn-lg" style={{ width: "18rem" }}>
                    <img
                        className="card-img-top"
                        src={data.img_src}
                        alt="firstAid">
                    </img>
                    <div className="card-body">
                        <h3>{data.name}</h3>
                        <p className="card-text">{data.information[0].substring(0, 80)}</p>
                    </div>
                </div>
            </div>

            <Modal
                size="lg"
                show={show}
                onHide={() => setShow(false)}
                aria-labelledby="example-custom-modal-styling-title"
            >

                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        {data.name}
                        <br></br>
                        <img alt={data.name} src={data.img_src} className="imgInsideModal"></img>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    {(data.information.map)(data => {
                        return (
                            <p>
                                {data}
                            </p>
                        );
                    })}

                    <iframe style={{ minWidth: "100%", minHeight: "400px" }} src={data.yt_url}
                        allow='autoplay; encrypted-media'
                        allowFullScreen
                        title='video'
                    />

                </Modal.Body>
            </Modal>
        </>
    );
}

export default Example;


