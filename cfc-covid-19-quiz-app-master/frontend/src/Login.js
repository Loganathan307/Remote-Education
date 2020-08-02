import React, { Component } from 'react';  
import './App.css'; 
import {push} from 'react-router-dom';
import App from './App'; 
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';  
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';  
class Login extends Component {  
    constructor() {  
        super();  
  
        this.state = {  
            UserName: '',  
            Password: ''  
        }  
  
        this.Password = this.Password.bind(this);  
        this.UserName = this.UserName.bind(this);  
        this.login = this.login.bind(this);  
    }  
  
    UserName(event) {  
        this.setState({ UserName: event.target.value })  
    }  
    Password(event) {  
        this.setState({ Password: event.target.value })  
    }  
    login(event) {  
        debugger;  
        fetch('http://localhost:3030/api/UserDetails?filter={"where":{"UserName":"Boopathi"}}').then((Response) => Response.json())  
            .then((result) => {  
                const checklogin = result.filter(q => (q.UserName === this.state.UserName));
                if (parseInt(checklogin.length)>0)  
                {
                   
                   
                this.props.history.push("/App");   
                }
                else  
                this.props.history.push("/PostQuestion");   
            })  
    }  
  
    render() {  
  
        return (  
            <div className="app flex-row align-items-center">  
                <Container>  
                    <Row className="justify-content-center">  
                        <Col md="9" lg="7" xl="6">  
  
                            <CardGroup>  
                                <Card className="p-2">  
                                    <CardBody>  
                                        <Form>  
                                            <div class="row" className="mb-2 pageheading">  
                                                <div class="col-sm-12 btn btn-primary">  
                                                    Login  
                             </div>  
                                            </div>  
                                            <InputGroup className="mb-3">  
  
                                                <Input type="text" onChange={this.UserName} placeholder="Enter Email" />  
                                            </InputGroup>  
                                            <InputGroup className="mb-4">  
  
                                                <Input type="password" onChange={this.Password} placeholder="Enter Password" />  
                                            </InputGroup>  
                                            <Button onClick={this.login} color="success" block>Login</Button>  
                                        </Form>  
                                    </CardBody>  
                                </Card>  
                            </CardGroup>  
                        </Col>  
                    </Row>  
                </Container>  
            </div>  
        );  
    }  
}  
  
export default Login;