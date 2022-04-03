import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SimpleForm from "./components/SimpleForm";
import {Row, Col} from 'react-bootstrap';
import logo from './images/hack-at-uci-logo.png';

function App() {
    return (
      <div>
        <div className="bigPad" style={{paddingTop:"20vh"}}>
          <Row><Col lg={1} md={1} xs={1}></Col></Row>
        </div>
        <Row>
          <Col lg={2} md={0} xs={1}></Col>
          <Col lg={4} md={5} xs={10} className="smallPad">
            <SimpleForm/>
          </Col>
          <Col lg={2} md={0} xs={1}></Col>
          <Col lg={2} md={5} xs={0}>
            <center>
              <img className="moveLogo" src={logo} alt="Hack Logo"/>
            </center>
          </Col>  
        </Row>   
      </div>
    );   
}

export default App;