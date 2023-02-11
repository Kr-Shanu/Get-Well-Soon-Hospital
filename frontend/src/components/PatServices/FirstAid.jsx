import React from "react";
import firstAids from "../../firstaidInfo";
import Example from "./firstAidInformation";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

function FirstAid() {

    return (
        <Container fluid>
            <h1>First Aid</h1>
            <Row>
                {(firstAids.map)(data => {
                    return (
                        <Example val={data}
                        />
                    );
                })}
            </Row>
        </Container>
    );
}

export default FirstAid;