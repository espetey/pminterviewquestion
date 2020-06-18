import React, { useState, useEffect } from 'react';
import { get, sample, sampleSize } from 'lodash';
import './App.css';
import companies from './data/companies';
import questions from './data/questions';
import interviewers from './interviewers';

function buildImages(images) {

}

function buildInterview(q) {
  return [
    get(q, 'courtesy.opener[0].question'),
    ...sampleSize(get(q, 'general.general'), 4).map(s => get(s, 'question')),
    ...sampleSize(get(q, 'communication.behavioral'), 4).map(s => get(s, 'question')),
    ...sampleSize(get(q, 'communication.conflict'), 4).map(s => get(s, 'question')),
    ...sampleSize(get(q, 'communication.leadership'), 4).map(s => get(s, 'question')),
    ...sampleSize(get(q, 'product.design'), 4).map(s => get(s, 'question')),
    ...sampleSize(get(q, 'product.strategy'), 4).map(s => get(s, 'question')),
    ...sampleSize(get(q, 'technical.general'), 4).map(s => get(s, 'question')),
    ...sampleSize(get(q, 'technical.analysis'), 4).map(s => get(s, 'question')),
    ...sampleSize(get(q, 'technical.engineering'), 4).map(s => get(s, 'question')),
    get(q, 'courtesy.closer[0].question')
  ]
}

function App() {
  const [questionCount, setQuestionCount] = useState(0);
  const [interviewQuestions, setInterviewQuestions] = useState([]);

  useEffect(() => {
    setInterviewQuestions(buildInterview(questions()));
  }, []);

  console.log('hmmmm');
  console.log(interviewQuestions);

  return (
    <div className="App">
      <header className="App-header">
        PM Interview Question
      </header>
      <div className="App-body">
        <img src={sample(interviewers)} className="Interviewer" />
        <p className="question">
          {interviewQuestions[questionCount]}
        </p>
        <div className="Next">
          <button
            className="Next-btn"
            onClick={() => setQuestionCount(questionCount + 1)}
          >
            Next
          </button>
        </div>
      </div>
      <div className="info">
        <p>
          Interested in getting a PM interview question each morning to workshop during your day?
          </p>
        <p>
          <a href="http://eepurl.com/g7LcNn" target="_blank">Sign up for the daily newsletter</a>. I will never share your email. Ever.
          </p>
        <p>
          Since I'm currently preparing for PM interviews, I'll also include either my full-blown answer from the day before or just some meditations/brainstorming on the previous day's question. If you feel like replying to the email with your response, I will try to give some feedback in exchange for some feedback on my own answer.
          </p>
      </div>
      <div className="info">
        <p>
          <h3>Add a question, company, or product</h3>
          <a className="App-link" href="https://github.com/espetey/pminterviewquestion" target="_blank">Open a pull request on GitHub</a>.
        </p>
      </div>
      <div className="info">
        <p>
          <h3>Estimation Data</h3>

        </p>
      </div>
      <div className="info">
        <p>
          <h3>Why the pictures of people?</h3>
            This fun little website is no substitue for interviewing with real people, either in an actual job interview or with a friend or colleague in a mock interview setting. But I thought a random stock picture with someone would be good practice for making eye contact. If you have suggestions for other pictures, think any of the ones I'm using are too creepy, or have any other ideas, <a className="App-link" href="https://github.com/espetey/pminterviewquestion" target="_blank">open a pull request on GitHub</a> or <a href="https://twitter.com/espetey" target="_blank">talk to me on Twitter</a>.
        </p>
      </div>
    </div>
  );
}

export default App;
