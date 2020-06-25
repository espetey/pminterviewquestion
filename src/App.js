import React, { useState, useEffect } from 'react';
import { sample } from 'lodash';
import './App.css';
import About from './About';
import questions from './data/questions';
import interviewers from './interviewers';
import { buildInterview } from './helpers';

function scrollTo(anchor) {
  anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function App() {
  const [questionCount, setQuestionCount] = useState(0);
  const [interviewQuestions, setInterviewQuestions] = useState([]);
  const [topAnchor, setTopAnchor] = useState(null);
  const [aboutAnchor, setAboutAnchor] = useState(null);
  const [dataAnchor, setDataAnchor] = useState(null);

  useEffect(() => {
    setInterviewQuestions(buildInterview(questions()));
    setTopAnchor(document.getElementById('top'));
    setAboutAnchor(document.getElementById('about'));
    setDataAnchor(document.getElementById('data'));
  }, []);

  useEffect(() => {
    if (questionCount > interviewQuestions.length - 1) {
      setQuestionCount(0);
    }
  }, [interviewQuestions, questionCount, setQuestionCount]);

  return (
    <div id="top" className="App-Container">
      <nav>
        <button className="Nav-btn Title-btn" onClick={() => scrollTo(topAnchor)}>
          PM Interview Question
        </button>
        <button className="Nav-btn" onClick={() => scrollTo(aboutAnchor)}>
          About
        </button>
        <button className="Nav-btn" onClick={() => scrollTo(dataAnchor)}>
          Data
        </button>
        <button className="Nav-btn Next-btn"
          onClick={() => {
            scrollTo(topAnchor);
            setQuestionCount(questionCount + 1);
          }}
        >
          Next Question
        </button>
      </nav>
      <div className="App">
        <div className="App-body">
          <img src={sample(interviewers)} className="Interviewer" alt="interview" />
          <p className="question">
            {interviewQuestions[questionCount]}
          </p>
        </div>
      </div>
      <About />
    </div >
  );
}

export default App;
