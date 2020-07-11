import React from 'react';
import DataTable from './DataTable';

function About() {
  return (
    <div className="About">
      <div className="info">
        <h1 id="about">About PM Interview Question</h1>
        <p>
          Interested in getting a PM interview question each morning to workshop during your day?
        </p>
        <p>
          <a href="http://eepurl.com/g7LcNn" target="_blank" rel="noopener noreferrer">Sign up for the daily newsletter</a>. I will never share your email.
        </p>
        <p>
          Since I'm currently preparing for PM interviews, I'll also include either my full-blown answer from the day before or just some meditations/brainstorming on the previous day's question. If you feel like replying to the email with your response, I will try to give some feedback in exchange for some feedback on my own answer.
        </p>
      </div>
      <div className="info">
        <h3>What is this thing?</h3>
        <p>
          I would love to be a product manager at a great technology company. I decided to build a quick app to help me step through various recommended interview questions in a way that mimics a real interview. It is also a good script for the friends I convince to give me a mock interview. I hope it will be useful for anyone else who is going through the same process.
        </p>
        <p>
          The progression of the interview here (which does not neccessarily parallel an actual PM interview) is built from a random selection of categorized questions in the following order:
          </p>
        <ul>
          <li>Courtesy opener - 1 question</li>
          <li>General interview - 4 questions</li>
          <li>Communication/Leadership - 2 questions</li>
          <li>Communication/Behavioral - 2 questions</li>
          <li>Communication/Conflict - 2 questions</li>
          <li>Product/Design - 5 questions</li>
          <li>Product/Strategy - 5 questions</li>
          <li>Technical/General - 4 questions</li>
          <li>Technical/Analysis - 2 questions</li>
          <li>Technical/Engineering - 2 questions</li>
          <li>Courtesy closers - 2 questions</li>
        </ul>
        <p>
          I have included "Technical/Engineering" questions by default for coverage on Technical Product Manager positions. As time permits I'll add a few bells and whistles here to customize the question flow for other configurations (technical/non-technical, company specific, and category specific).
        </p>
      </div>
      <div className="info">
        <h3>Add a question, company, or product</h3>
        <p>
          <a className="App-link" href="https://github.com/espetey/pminterviewquestion" target="_blank" rel="noopener noreferrer">Open a pull request on GitHub</a>.
        </p>
      </div>
      <div className="info">
        <h3>Why the pictures of people?</h3>
        <p>
          This fun little website is no substitue for interviewing with real people, either in an actual job interview or with a friend or colleague in a mock interview setting. But I thought a random stock picture with someone would be good practice for making eye contact. If you have suggestions for other pictures, think any of the ones I'm using are too creepy, or have any other ideas, <a className="App-link" href="https://github.com/espetey/pminterviewquestion" target="_blank" rel="noopener noreferrer">open a pull request on GitHub</a> or <a href="https://twitter.com/espetey" target="_blank" rel="noopener noreferrer">talk to me on Twitter</a>.
        </p>
      </div>
      <div className="info">
        <h3>Data collection and analytics</h3>
        <p>
          I use Google Analytics for this app to measure usage and to learn more about Google's analytics platform in general.
        </p>
      </div>
      <div className="info">
        <h1 id="data">Data</h1>
        <DataTable />
      </div>
    </div>
  );
}

export default About;
