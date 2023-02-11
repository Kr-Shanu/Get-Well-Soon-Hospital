import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    BMI Scale
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img
                    style={{maxWidth:'100%'}}
                    alt='BMIscale'
                    src={props.img_src}></img>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

function App(props) {

    const [modalShow, setModalShow] = useState(false);

    return (
        <>
            <Button 
                variant="primary" 
                onClick={() => setModalShow(true)}
                >
                {props.btnName}
            </Button>

            <MyVerticallyCenteredModal
                img_src={props.imgSource}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}

export default App;