import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import BmiScale from './BmiScale'

function DailyCheckup() {

    const[bmi, setBmi] = useState(0.00);
    const[weight, setWeight] = useState(0);
    const[height, setHeight] = useState(0);
    const[upperBp, setUpperBP] = useState(0);
    const[lowerBp, setLowerBP] = useState(0);
    const[bpStatus, setBpStatus] = useState("");
    const[sugar, setSugar] = useState(0);
    const[calBurnt, setCalBurnt] = useState(0);
    const[calTaken, setCalTaken] = useState(0);

    useEffect(()=>{
        console.log("New height and weight: "+ height +" ," + weight);
        console.log("BP status changed");
    },[weight, height])

    useEffect(()=>{
        console.log("Bp status changed.");
    }, [bpStatus])

    useEffect(()=> {
        console.log("Systolic pressure = "+ upperBp);
        console.log("Diastolic pressure = "+ lowerBp);
    }, [upperBp, lowerBp])

    function handleBmiClick(e) {

        e.preventDefault();
        let h = height/100;
        h = h*h;
        let new_bmi = (weight*1.0)/(h*1.0);
        new_bmi = (Math.round(new_bmi * 100) / 100).toFixed(2);
        setBmi(new_bmi);
        console.log("New Bmi = "+ new_bmi);

    }


    function handleBpStatus(e) {

        e.preventDefault();
        let systolicPressure = upperBp;
        let diastolicPressure = lowerBp;
        var answer="";

        if(systolicPressure < 90 || diastolicPressure < 60) 
            answer = "Low ⛔️";
        else if(systolicPressure >= 140 || diastolicPressure >= 90)
            answer = "High ⛔️";
        else
            answer = "Normal ✅"
        
        setBpStatus(answer);
        console.log("New Bp status :" + bpStatus);
    }

    return (
        <>
            <h1>Daily Checkup</h1>
            <Form style={{ textAlign: 'left', fontFamily: 'monospace' }}>
                <br></br>
                <br></br>
                <h2 style={{textAlign:'center'}}>BMI</h2>
                <br></br>
                <Form.Group 
                    className="mb-3" 
                    controlId="formGroupEmail"
                >
                    <Form.Label>
                        Height
                    </Form.Label>
                    <Form.Control 
                        onChange={(event)=>{setHeight(event.target.value)}} 
                        type="number" 
                        placeholder="Enter height in cm" 
                    />
                </Form.Group>

                <Form.Group 
                    className="mb-3" 
                    controlId="formGroupPassword">
                    <Form.Label>
                        Weight
                    </Form.Label>
                    <Form.Control 
                        onChange={(event)=>{setWeight(event.target.value)}} 
                        type="number" 
                        placeholder="Enter weight in Kg" />
                </Form.Group>

                <Row>
                    <Col>
                        <Button onClick={handleBmiClick} variant="info">
                            My BMI
                        </Button>
                    </Col>
                    <Col>
                        <Form.Control
                            aria-label="Example text with button addon"
                            aria-describedby="basic-addon1"
                            value={bmi}
                        />
                    </Col>
                </Row>
                <br></br>

                <BmiScale
                    btnName="Check BMI scale"
                    imgSource='https://t4.ftcdn.net/jpg/04/21/79/87/360_F_421798715_GTkGo9wBJ76XLu2NzvJHXNQjULVjpX8v.jpg'
                />

                <br></br>
                <br></br>
                <h2 style={{textAlign:'center'}}>Blood Pressure</h2>
                <br></br>
                <Form.Group 
                    className="mb-3" 
                    controlId="formGroupPassword">
                    <Form.Label>
                        Systolic Pressure  
                    </Form.Label>
                    <Form.Control 
                        onChange={(event)=>{setUpperBP(event.target.value)}} 
                        type="number" 
                        placeholder="Enter systolic Pressure " />
                </Form.Group>
                <Form.Group>
                    <Form.Label>
                        Diastolic Pressure   
                    </Form.Label>
                    <Form.Control 
                        type="number"
                        onChange={(event)=>{setLowerBP(event.target.value)}}  
                        placeholder="Enter systolic Pressure " />
                </Form.Group>
                <br></br>
                <Row>
                    <Col>
                        <Button variant="info" onClick={handleBpStatus}>
                            Status
                        </Button>
                    </Col>
                    <Col>
                        <Form.Control
                            aria-label="Example text with button addon"
                            aria-describedby="basic-addon1"
                            value={bpStatus}
                        />
                    </Col>
                </Row>
                <br></br>

                <BmiScale
                    btnName="Check Blood Pressure scale"
                    imgSource='https://archive.org/download/low-vs-high-blood-pressure-chart/low-vs-high-blood-pressure-chart.gif'
                />

                <br></br>
                <br></br>
                {/* Blood Pressure */}
                <Form.Group>
                    <Form.Label>
                        Blood Sugar
                    </Form.Label>
                    <Form.Control
                        type="number"
                        onChange={(event)=>{setSugar(event.target.value)}}
                        aria-label="Example text with button addon"
                        aria-describedby="basic-addon1"
                        placeholder="Enter blood sugar level in dg/ml"
                    >
                    </Form.Control>
                    <br></br>
                    <Form.Label>
                        Calories Burnt
                    </Form.Label>
                    <Form.Control
                        type="number"
                        onChange={(event)=>{setCalBurnt(event.target.value)}}
                        aria-label="Example text with button addon"
                        aria-describedby="basic-addon1"
                        placeholder="Enter the calories burnt"
                    >
                    </Form.Control>
                    <br></br>
                    <Form.Label>
                        Calories Intake
                    </Form.Label>
                    <Form.Control
                        type="number"
                        onChange={(event)=>{setCalTaken(event.target.value)}}
                        aria-label="Example text with button addon"
                        aria-describedby="basic-addon1"
                        placeholder="Enter the amount of calories intake"
                    >
                    </Form.Control>
                    <br></br>
                    <br></br>
                </Form.Group>
                <Button variant="info">Submit report</Button>
                <br></br>
                <br></br>
            </Form>
        </>
    );
}

export default DailyCheckup;