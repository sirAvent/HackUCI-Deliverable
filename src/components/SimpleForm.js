import React, { Component } from 'react';
import {Container, Form, Button} from 'react-bootstrap';
import "./SimpleForm.css";


class SimpleForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      fact: '',
    };
    this.handleEmail = this.handleEmail.bind(this);
  }

  handleSubmit = e => {
    e.preventDefault()
    fetch('https://hack-tech-app-endpoint.herokuapp.com/test?name='+this.state.name+'&email='+this.state.email+'&funfact='+ this.state.fact)
      .then((response) => {
        if(!response.ok) throw new Error(response.status);
        else return response.json();
      })
      .then((data) => {
        this.setState({ isLoading: false, downlines: data.response });
        console.log("SUCCESSFUL REQUEST");
        alert('Application sent successfully! Thank you for submitting!')
        this.setState({name: ''});
        this.setState({email: ''});
        this.setState({fact: ''});
      })
      .catch((error) => {
        console.log('error: ' + error);
        alert('Application was not sent. ' + error)
        this.setState({ requestFailed: true });
      });
  }

  handleEmail = e => {
    this.setState({email: e.target.value});
  }

  handleName = e => {
    this.setState({name: e.target.value});
  }

  handleFact = e => {
    this.setState({fact: e.target.value});
  }

  render() {
    return (
      <Container className="bg-light shadow-lg appSquare">
        <Form onSubmit={this.handleSubmit}>
          <Form.Label className="text-center appText appTitle" style={{width: "100%", paddingTop:"25px"}}>
            <span className="title full-title">Hack UCI Application</span>
            <span className="title short-title">Hack UCI<br></br>Application</span>
          </Form.Label>
            <Form.Group controlId="form.Name" style={{padding: "15px"}}>
                <Form.Label className="appText"><b>Name</b></Form.Label>
                <Form.Control className="border-dark appText" required="{true}" type="text" placeholder="Name" value={this.state.name} onChange={this.handleName}/>
            </Form.Group>
            <Form.Group controlId="form.Email" style={{padding: "15px"}}>
                <Form.Label className="appText"><b>Email</b></Form.Label>
                <Form.Control required="{true}" type="email" className="border-dark appText" placeholder="Email" value={this.state.email} onChange={this.handleEmail}/>
            </Form.Group>
            <Form.Group controlId="form.FunFact" style={{padding: "15px"}}>
                <Form.Label className="appText"><b>Fun Fact</b></Form.Label>
                <Form.Control className="border-dark appText" required="{true}" as="textarea" rows={3} placeholder="Fun Fact" value={this.state.fact} onChange={this.handleFact} />
            </Form.Group>
            <div align="right" style={{paddingRight:"15px", paddingBottom: "5%", paddingTop: "7%", marginBottom: "5px"}}>
              <Button
                style={{paddingLeft: "1px",paddingRight: "1px", borderWidth:"0px", width:"25%"}}
                className="appText subBtn rounded-pill" variant="primary" type="submit">
              Submit
              </Button>
            </div>
        </Form>
      </Container>
    );
  }
}



export default SimpleForm;

