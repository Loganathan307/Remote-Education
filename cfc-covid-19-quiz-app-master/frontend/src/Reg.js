import React, { Component } from 'react';  
import Login from './Login';  
import { Button, Card, CardFooter, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';  
  
class Reg extends Component {  
  
  constructor() {  
    super();  
  
    this.state = {  
      UserName: '',  
      Password: '',  
      
      IDNo: '',  
      
      Class: [
        { id: '1', name: 'Class I' },
        { id: '2', name: 'Class II' }
        
      ],
      Standard: '1',

    Design: [
      { id: '1', name: 'Staff' },
      { id: '2', name: 'Student' }
      
    ],
    Designation: '1'
    }
     
    this.IDNo = this.IDNo.bind(this);   
    this.UserName = this.UserName.bind(this);  
    this.Password = this.Password.bind(this);  
    this.Designation = this.Designation.bind(this);  
    this.Standard = this.Standard.bind(this);  
    this.register = this.register.bind(this);  
  }  
  
  
  
  IDNo(event) {  
    this.setState({ IDNo: event.target.value })  
  }  
  
  UserName(event) {  
    this.setState({ UserName: event.target.value })  
  }  
  
  Password(event) {  
    this.setState({ Password: event.target.value })  
  }  
  Designation(event) {  
    this.setState({ Designation: event.target.value })  
    
  }  
  Standard(event) {  
    this.setState({ Standard: event.target.value })  
  }  
  
  register(event) {  
  
    fetch('http://localhost:3030/api/UserDetails', {  
      method: 'post',  
      headers: {  
        'Accept': 'application/json',  
        'Content-Type': 'application/json'  
      },  
      body: JSON.stringify({  
  
  
        UserName: this.state.UserName,  
        Password: this.state.Password,  
        UserId: this.state.IDNo,  
        Designation: this.state.Designation,  
        Standard: this.state.Standard  
      })  
    }).then((Response) => Response.json())  
      .then((result) => {  
        
        const checkReg = result.id;
        
        if (parseInt(checkReg)>0)  
                this.props.history.push("/Login");  
        else  
          alert('Sorrrrrry !!!! Un-authenticated User !!!!!')  
      })  
  }  
  
  render() {  
  
    return (  
      <div className="app flex-row align-items-center">  
        <Container>  
          <Row className="justify-content-center">  
            <Col md="9" lg="7" xl="6">  
              <Card className="mx-4">  
                <CardBody className="p-4">  
                  <Form>  
                    <div class="row" className="mb-2 pageheading">  
                      <div class="col-sm-12 btn btn-primary">  
                        Sign Up  
                        </div>  
                    </div>  
                    <InputGroup className="mb-3">  
                      <Input type="text"  onChange={this.UserName} placeholder="Enter UserName" />  
                    </InputGroup>  
                    <InputGroup className="mb-3">  
                      <Input type="password"  onChange={this.Password} placeholder="Enter Password" />  
                    </InputGroup>  
                    <InputGroup className="mb-3">  
                       
                      <select class="form-control" onChange={this.Designation}>
                {this.state.Design.map(q => <option key={q.id} value={q.id}>{q.name}</option>)}
              </select>
                    </InputGroup>  
                    <InputGroup className="mb-4">  
                      <Input type="text"  onChange={this.IDNo} placeholder="Enter ID" />  
                    </InputGroup>  
                    <InputGroup className="mb-4">  
                    <select class="form-control" onChange={this.Standard}>
                {this.state.Class.map(q => <option key={q.id} value={q.id}>{q.name}</option>)}
              </select>
                       
                    </InputGroup>  
                    <Button  onClick={this.register}  color="success" block>Create Account</Button>  
                  </Form>  
                </CardBody>  
              </Card>  
            </Col>  
          </Row>  
        </Container>  
      </div>  
    );  
  }  
}  
  
export default Reg; 