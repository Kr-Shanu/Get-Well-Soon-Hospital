import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import '../../cards.css'

function Example(props) {

    const [show, setShow] = useState(false);
    const data = props.val;

    return (
        <>
            <div className="firstAidCard">
                <Button style={{ padding: '0' }} variant="dark" onClick={() => setShow(true)}>
                    <Card style={{ width: '18rem', margin: '0', padding: '0' }}>
                        <Card.Img variant="top" src={data.img_src} />
                        <Card.Body>
                            <Card.Title><b>{data.name}</b></Card.Title>
                            <Card.Text>
                                {data.information[0].substring(0, 80)}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Button>
            </div>


            <Modal
                size="lg"
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-99w"
                aria-labelledby="example-custom-modal-styling-title"
                scrollable
            >

                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        {data.name}
                        <br></br>
                        <img alt={data.name} src={data.img_src} className="imgInsideModal"></img>
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>

                    <ul>
                            {(data.information.map)(data => {
                                return (
                                    <li>
                                        {data}
                                    </li>
                                );
                            })}
                    </ul>

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