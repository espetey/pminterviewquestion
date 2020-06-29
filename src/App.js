import React, { useState, useEffect } from 'react';
// import { get } from 'lodash';
import './App.css';
import About from './About';
import questions from './data/questions';
import { buildInterview } from './helpers';

function scrollTo(anchor) {
  anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
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

  // useEffect(() => {
  //   window.addEventListener('keydown', (e) => {
  //     const keyCode = get(e, 'keyCode');
  //     if (keyCode === 39) {
  //       setQuestionCount(questionCount + 1);
  //     }
  //     return () => {
  //       window.removeEventListener('keydown');
  //     };
  //   });
  // }, [setQuestionCount]);

  useEffect(() => {
    if (questionCount > interviewQuestions.length - 1) {
      setQuestionCount(0);
    }
  }, [interviewQuestions, questionCount, setQuestionCount]);

  const interviewerImage = `Interviewer interviewer-${getRandomInt(17).toString()}`;

  return (
    <>
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
      <div id="top" className="App-Container">
        <div className="App">
          <div className={interviewerImage}>
          </div>
          <div className="Question">
            <div className="question-text">
              {interviewQuestions[questionCount]}
            </div>
          </div>
        </div>
        <About />
      </div >
    </>
  );
}

export default App;
