import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
//import logo from "./logo.svg";
import Quiz from './components/Quiz';
import { connect } from 'react-redux';
import { ActionTypes } from './constants/actionTypes';

const mapStateToProps = state => { return { ...state.quiz } };

const mapDispatchToProps = dispatch => ({
  onQuizLoad: payload => dispatch({ type: ActionTypes.QuizLoad, payload }),
  onPagerUpdate: payload => dispatch({ type: ActionTypes.PagerUpdate, payload })
});

class App extends Component {
  state = {
    quizes: [
      { id: 'data/javascript.json', name: 'Javascript' },
      { id: 'data/aspnet.json', name: 'Asp.Net' },
      { id: 'data/csharp.json', name: 'C Sharp' },
      { id: 'data/designPatterns.json', name: 'Design Patterns' }
    ],
    quizId: 'data/javascript.json'
  };

  pager = {
    index: 0,
    size: 1,
    count: 1
  }

  componentDidMount() {
    this.load(this.state.quizId);
  }

  load(quizId) {
    
  //  let url = quizId || this.props.quizId;
    fetch(`http://localhost:3030/api/Questions?filter={"include":"options"}`).then(res => res.json()).then(res => {
      var json={'id':1,'name':'','questions':res}; 
    let quiz = json;
      quiz.questions.forEach(q => {
        q.options.forEach(o => o.selected = false);
      });
      quiz.config = Object.assign(this.props.quiz.config || {}, quiz.config);
      this.pager.count = quiz.questions.length / this.pager.size;
      this.props.onQuizLoad(quiz);
      this.props.onPagerUpdate(this.pager);
    });
  }

  onChange = (e) => {
    this.setState({ quizId: e.target.value });
    this.load(e.target.value);
  }

  render() {
    return (
      <div className="App">
      <header className="App-header">
      <img alt="IBM Logo" src="ibm-logo-white.png" class="logo"/>
        <h1> Simple Quiz App</h1>
        <ul>
         
          </ul>
       
        <Quiz quiz={this.state.quiz} quizId={this.state.quizId} mode={this.state.mode} />
        
      <p>Go Further with <a href="https://reactjs.org/tutorial/tutorial.html">React</a> and <a href="https://loopback.io/">Loopback</a></p>
      <p>Deploy your app using <a href="https://github.com/IBM/nodejs-express-app#ibm-cloud-developer-tools">Cloud Foundry</a> or <a href="https://developer.ibm.com/patterns/app-modernization-s2i-openshift/">Kubernetes and OpenShift</a>.</p>
      </header>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
