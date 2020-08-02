import React, { Component } from 'react';  
import { Button, Card, CardFooter, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';  
  
class PostQuestion extends Component {  
  
  constructor() {  
    super();  
  
    this.state = {  
      Question: '',  
      Option1: '',
      Option2: '',
      Option3: '',
      Option4: '',
 
      
      Class: [
        { id: '1', name: 'Class I' },
        { id: '2', name: 'Class II' }
        
      ],
      isAnswerOpt: [
        {id: '1', name: 'false'},
        {id: '2', name: 'true'}
      ],
     
      
      Standard: '1',
      isAnswerDefault: '1',
      //isAnswerDefault2: '1',
      //isAnswerDefault3: '1',
      //isAnswerDefault4: '1',
      questionTypeId: '1',
      questionId: '0',
      flag: '0',
      i: '0',
    }
    
    const checkReg= '0'

    //this.IDNo = this.IDNo.bind(this);   
    this.Question = this.Question.bind(this);  
    this.Option1 = this.Option1.bind(this);  
    this.Option2 = this.Option2.bind(this);  
    this.Option3 = this.Option3.bind(this);  
    this.Option4 = this.Option4.bind(this);  
    //this.Designation = this.Designation.bind(this);  
    this.Standard = this.Standard.bind(this);  
    this.isAnswerDefault= this.isAnswerDefault.bind(this);
    /*
    this.isAnswerDefault2= this.isAnswerDefault2.bind(this);
    this.isAnswerDefault3= this.isAnswerDefault3.bind(this);
    this.isAnswerDefault4= this.isAnswerDefault4.bind(this);
    */
     //this.questionId=this.questionId.bind(this);
    //this.i=this.i.bind(this);
    //this.flag=this.flag.bind(this);
    this.UploadQuestion = this.UploadQuestion.bind(this);  
  }  
  
    
  
  Question(event) {  
    this.setState({ Question: event.target.value })  
  }  
  
  Option1(event) {  
    this.setState({ Option1: event.target.value })  
  }  
  Option2(event) {  
    this.setState({ Option2: event.target.value })  
  } 
  Option3(event) {  
    this.setState({ Option3: event.target.value })  
  } 
  Option4(event) {  
    this.setState({ Option4: event.target.value })  
  } 
  

    Standard(event) {  
    this.setState({ Standard: event.target.value })  
  }  
  
  isAnswerDefault(event) {
    this.setState({isAnswerDefault: event.target.value})
  }



  UploadQuestion(event) {
    
    if (this.state.Standard=='Class I')
    this.questionTypeId=1
    else
    this.questionTypeId=2
    
    this.i=0
    
    fetch('http://localhost:3030/api/Questions', {  
      method: 'post',  
      headers: {  
        'Accept': 'application/json',  
        'Content-Type': 'application/json'  
      },  
      body: JSON.stringify({  
  
        name: this.state.Question,
        questionTypeId: this.questionTypeId
        
      })  
    }).then((Response) => Response.json())  
      .then((result) => {  
        
        const checkReg = result.id;
        this.questionId=result.id;
        
        if (parseInt(checkReg)>0)  
               alert('Questions posted successfully!!')  
        else  
          alert('Error in Posting Question'+checkReg)  
      })

        //const options=[{name:this.Option1}, {name:this.Option2},{name:this.Option3},{name:this.Option4}]
   // options.forEach(element => {
      //if(this.i==0)
      //{
        //alert(this.questionId)
      fetch('http://localhost:3030/api/options', {  
        method: 'post',  
        headers: {  
          'Accept': 'application/json',  
          'Content-Type': 'application/json'  
        },
        
       
        body: JSON.stringify({  
          
          name: this.state.Option1,
          questionId: 11,
          isAnswer: false

          
        }
        ) 
      }).then((Response) => Response.json())  
        .then((result) => {  
          
          const checkReg = result.id;
          
          if (parseInt(checkReg)>0)  
                  this.flag++
          else  
            alert('Error in Posting option'+checkReg)  
        })
        //this.i++
      //}
      fetch('http://localhost:3030/api/options', {  
        method: 'post',  
        headers: {  
          'Accept': 'application/json',  
          'Content-Type': 'application/json'  
        },
        
       
        body: JSON.stringify({  
          
          name: this.state.Option2,
          questionId: 11,
          isAnswer: true

          
        }
        ) 
      }).then((Response) => Response.json())  
        .then((result) => {  
          
          const checkReg = result.id;
          
          if (parseInt(checkReg)>0)  
                  this.flag++
          else  
            alert('Error in Posting option'+checkReg)  
        })
        
      fetch('http://localhost:3030/api/options', {  
        method: 'post',  
        headers: {  
          'Accept': 'application/json',  
          'Content-Type': 'application/json'  
        },
        
       
        body: JSON.stringify({  
          
          name: this.state.Option3,
          questionId: 11,
          isAnswer: false

          
        }
        ) 
      }).then((Response) => Response.json())  
        .then((result) => {  
          
          const checkReg = result.id;
          
          if (parseInt(checkReg)>0)  
                  this.flag++
          else  
            alert('Error in Posting option'+checkReg)  
        })
      fetch('http://localhost:3030/api/options', {  
        method: 'post',  
        headers: {  
          'Accept': 'application/json',  
          'Content-Type': 'application/json'  
        },
        
       
        body: JSON.stringify({  
          
          name: this.state.Option4,
          questionId: 11,
          isAnswer: false

          
        }
        ) 
      }).then((Response) => Response.json())  
        .then((result) => {  
          
          const checkReg = result.id;
          
          if (parseInt(checkReg)>0)  
                  this.flag++
          else  
            alert('Error in Posting option'+checkReg)  
        })
      
     //});
    
      if (this.flag==3)
      alert('Options posted successfully!!')
     
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
                      <div class="col-sm-12 pageheading justify-content-center">  
                        Upload Questions
                        </div>  
                    </div>  
                  
                    <InputGroup className="mb-3">  
                       
                      <select class="form-control" onChange={this.Standard}>
                {this.state.Class.map(q => <option key={q.id} value={q.id}>{q.name}</option>)}
              </select>
                    </InputGroup>  
                    <InputGroup className="mb-3">  
                      <Input type="textarea"  onChange={this.Question} placeholder="Enter Question" />  
                    </InputGroup>  
                    <InputGroup className="mb-3">  
                      <Input type="textarea"  onChange={this.Option1} placeholder="Enter Option1" />  
                    </InputGroup>  
                    <InputGroup className="mb-3">
                    <select class="form-control" onChange={this.isAnswerDefault}>
                {this.state.isAnswerOpt.map(q => <option key={q.id} value={q.id}>{q.name}</option>)}
              </select>
                    </InputGroup>
                    <InputGroup className="mb-3">  
                      <Input type="textarea"  onChange={this.Option2} placeholder="Enter Option2" />  
                    </InputGroup>  
                    <InputGroup className="mb-3">
                    <select class="form-control" onChange={this.isAnswerDefault}>
                {this.state.isAnswerOpt.map(q => <option key={q.id} value={q.id}>{q.name}</option>)}
              </select>
                    </InputGroup>
                    <InputGroup className="mb-3">  
                      <Input type="textarea"  onChange={this.Option3} placeholder="Enter Option3" />  
                    </InputGroup >  
                    <InputGroup className="mb-3">
                    <select class="form-control" onChange={this.isAnswerDefault}>
                {this.state.isAnswerOpt.map(q => <option key={q.id} value={q.id}>{q.name}</option>)}
              </select>
                    </InputGroup>
                    <InputGroup className="mb-3">  
                      <Input type="textarea"  onChange={this.Option4} placeholder="Enter Option4" />  
                    </InputGroup>   
                    <InputGroup className="mb-3">
                    <select class="form-control" onChange={this.isAnswerDefault}>
                {this.state.isAnswerOpt.map(q => <option key={q.id} value={q.id}>{q.name}</option>)}
              </select>
                    </InputGroup>
                    <Button  onClick={this.UploadQuestion}  color="success" block>Upload Questions</Button>  
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
  
export default PostQuestion; 