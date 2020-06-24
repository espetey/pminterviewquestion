import React, { useState, useEffect } from 'react';
import { get, sample, sampleSize, has } from 'lodash';
import './App.css';
import companies from './data/companies';
import questions from './data/questions';
import interviewers from './interviewers';

function buildQuestion(q) {
  const question = get(q, 'question');
  if (has(q, 'useVariables')) {
    const company = sample(companies());
    const companyName = get(company, 'name');
    const companyProduct = sample(get(company, 'products'));
    return question.replace(`__companyName__`, companyName).replace(`__companyProduct__`, companyProduct);
  }  
  return question;
}

function buildInterview(q) {
  return [
    get(q, 'courtesy.opener[0].question'),
    ...sampleSize(get(q, 'general.general'), 4).map(s => buildQuestion(s)),
    ...sampleSize(get(q, 'communication.leadership'), 4).map(s => buildQuestion(s)),
    ...sampleSize(get(q, 'communication.behavioral'), 4).map(s => buildQuestion(s)),
    ...sampleSize(get(q, 'communication.conflict'), 4).map(s => buildQuestion(s)),
    ...sampleSize(get(q, 'product.design'), 4).map(s => buildQuestion(s)),
    ...sampleSize(get(q, 'product.strategy'), 4).map(s => buildQuestion(s)),
    ...sampleSize(get(q, 'technical.general'), 4).map(s => buildQuestion(s)),
    ...sampleSize(get(q, 'technical.analysis'), 4).map(s => buildQuestion(s)),
    ...sampleSize(get(q, 'technical.engineering'), 4).map(s => buildQuestion(s)),
    get(q, 'courtesy.closer[0].question'),
    get(q, 'courtesy.closer[1].question')
  ]
}

function App() {
  const [questionCount, setQuestionCount] = useState(0);
  const [interviewQuestions, setInterviewQuestions] = useState([]);

  useEffect(() => {
    setInterviewQuestions(buildInterview(questions()));
  }, []);

  return (
    <div className="App-Container">
      <a name="top">Top</a>
      <header className="App-header">
        <div><a href="#top">PM Interview Question</a></div>
        <div><a href="#about">About</a></div>
        <div><a href="#data">Data</a></div>
      </header>
      <div className="App">
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
              Next Question
            </button>
          </div>
        </div>
      </div>
      <div className="About">
        <div className="info">
          <h1><a name="about">About</a></h1>
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
          <p>
            <h3>What is this thing?</h3>
            I would love to be a product manager at a great technology company. I decided to build a quick app to help me step through various recommended interview questions in a way that mimics a real interview. It is also a good script for the friends I convince to give me a mock interview. I hope it will useful for anyone else who is going through the same process.
          </p>
        </div>
        <div className="info">
          <p>
            <h3>Add a question, company, or product</h3>
            <a className="App-link" href="https://github.com/espetey/pminterviewquestion" target="_blank" rel="noopener noreferrer">Open a pull request on GitHub</a>.
          </p>
        </div>
        <div className="info">
          <p>
            <h3>Why the pictures of people?</h3>
            This fun little website is no substitue for interviewing with real people, either in an actual job interview or with a friend or colleague in a mock interview setting. But I thought a random stock picture with someone would be good practice for making eye contact. If you have suggestions for other pictures, think any of the ones I'm using are too creepy, or have any other ideas, <a className="App-link" href="https://github.com/espetey/pminterviewquestion" target="_blank" rel="noopener noreferrer">open a pull request on GitHub</a> or <a href="https://twitter.com/espetey" target="_blank" rel="noopener noreferrer">talk to me on Twitter</a>.
          </p>
        </div>
        <div className="info">
          <p>
            <h3>Data collection and analytics</h3>
            I use Google Analytics for this app to measure usage and to learn more about Google's Analytics platform in general.
          </p>
        </div>
        <div className="info">
          <h1><a name="data">Data</a></h1>
          <p>These are some roundings and rough estimations of data points which may enlighten your answers. "+" indicates I rounded down. "-" indicates I rounded up. Colloquially, you would say "1+ billion" as "Just over one billion..." and "1- billion" as "Just under one billion..."</p>
          <h3>Population<sup>1</sup></h3>
          <table className="data-table">
            <tr>
              <td>World</td>
              <td>7.8 billion</td>
            </tr>
            <tr>
              <td>China</td>
              <td>1.5- billion</td>
            </tr>
            <tr>
              <td>India</td>
              <td>1.4- billion</td>
            </tr>
            <tr>
              <td>United States</td>
              <td>330+ million</td>
            </tr>
            <tr>
              <td>Asia</td>
              <td>4.5+ billion</td>
            </tr>
            <tr>
              <td>Africa</td>
              <td>1.3+ billion</td>
            </tr>
            <tr>
              <td>Europe</td>
              <td>750- million</td>
            </tr>
            <tr>
              <td>Latin America and the Caribbean</td>
              <td>650+ million</td>
            </tr>
            <tr>
              <td>North America</td>
              <td>370- million</td>
            </tr>
            <tr>
              <td>Oceania</td>
              <td>40+ million</td>
            </tr>
            <tr>
              <td>Global Population Growth Rate</td>
              <td>1.05%, 81 million</td>
            </tr>
          </table>
          <h3>Life Expectancy<sup>2</sup></h3>
          <table className="data-table">
            <tr>
              <td>World</td>
              <td>71 (Male 70, Female 72)</td>
            </tr>
            <tr>
              <td>Japan</td>
              <td>85 (Male 81, Female 88)</td>
            </tr>
            <tr>
              <td>United States</td>
              <td>79 (Male 76, Female 81)</td>
            </tr>
            <tr>
              <td>China</td>
              <td>77 (Male 75, Female 79)</td>
            </tr>
            <tr>
              <td>India</td>
              <td>70 (Male 68, Female 71)</td>
            </tr>
          </table>
          <h3>Time</h3>
          <table className="data-table">
            <tr>
              <td>Year (Hours)</td>
              <td>9000</td>
            </tr>
            <tr>
              <td>Year (Minutes)</td>
              <td>500,000</td>
            </tr>
          </table>
          <h3>Data<sup>3</sup></h3>
          <table className="data-table">
            <tr>
              <td>Bit</td>
              <td>1 or 0</td>
            </tr>
            <tr>
              <td>Nibble</td>
              <td>4 bits</td>
            </tr>
            <tr>
              <td>Byte</td>
              <td>8 bits</td>
              <td>1 character, e.g., "a", is one byte</td>
            </tr>
            <tr>
              <td>KB - Kilobyte</td>
              <td>1,024 bits</td>
              <td>2 or 3 paragraphs of text</td>
            </tr>
            <tr>
              <td>MB - Megabyte</td>
              <td>1,024 KB</td>
              <td>1,000 pages of plain text (1,200 characters), 4 books (200 pages)</td>
            </tr>
            <tr>
              <td>GB - Gigabyte</td>
              <td>1,024 MB</td>
              <td>4,500 books (200 pages), 640 web pages (1.6 MB avg), 350 pictures (3 MB avg), 256 MP3s (4 MB avg).</td>
            </tr>
            <tr>
              <td>TB - Terabyte</td>
              <td>1,024 GB</td>
              <td>4.5 million books, 700,000 web pages (1.6 MB avg), 350,000 pictures (3 MB avg), 250,000 MP3s (4 MB avg), 250 DVDs (4.38 GB avg).</td>
            </tr>
            <tr>
              <td>PB - Petabyte</td>
              <td>1,024 TB</td>
              <td>4.5 billion books, 700 million web pages, 250 million MP3s, 1.5 million DVDs</td>
            </tr>
            <tr>
              <td>EB - Exabyte</td>
              <td>1,024 PB</td>
              <td>5 trillion books, 700 trillion web pages, 400 billion pictures, 300 billion MP3s, 250 million DVDs</td>
            </tr>
            <tr>
              <td>ZB - Zettabyte</td>
              <td>1,024 EB</td>
              <td>5 quadrillon books, 1 quadrillion web pages, 500 trillion pictures, 300 trillion MP3s, 250 billion DVDs</td>
            </tr>
            <tr>
              <td>YB - Yottabyte</td>
              <td>1,024 ZB</td>
              <td>5 quintillion books, 1 quintillion web pages, 500 quadrillion pictures, 300 quadrillion, 250 trillion DVDs</td>
            </tr>
          </table>
          <h3>Incomes (U.S.)<sup>4</sup></h3>
          <table className="data-table">
            <tr>
              <td>Median Household Income</td>
              <td>$64,000</td>
            </tr>
            <th>Deciles (Individual salaries)</th>
            <tr>
              <td>1%</td>
              <td>$250,000</td>
            </tr>
            <tr>
              <td>5%</td>
              <td>$140,000</td>
            </tr>
            <tr>
              <td>10%</td>
              <td>$100,000</td>
            </tr>
            <tr>
              <td>20%</td>
              <td>$65,000</td>
            </tr>
            <tr>
              <td>30%</td>
              <td>$45,000</td>
            </tr>
            <tr>
              <td>40%</td>
              <td>$35,000</td>
            </tr>
            <tr>
              <td>50%</td>
              <td>$25,000</td>
            </tr>
            <tr>
              <td>60%</td>
              <td>$20,000</td>
            </tr>
            <tr>
              <td>70%</td>
              <td>$10,000</td>
            </tr>
            <tr>
              <td>80%</td>
              <td>$5,000</td>
            </tr>
          </table>
          <h3>Technology</h3>
          <table className="data-table">
            <tr>
              <td>Apple, active devices<sup>5</sup></td>
              <td>1.5 billion</td>
            </tr>
            <tr>
              <td>Apple, active iPhones<sup>5</sup></td>
              <td>1 billion</td>
            </tr>
            <tr>
              <td>Android, active devices<sup>5</sup></td>
              <td>2.5 billion</td>
            </tr>
            <tr>
              <td>Windows, active devices<sup>6</sup></td>
              <td>1 billion</td>
            </tr>
            <tr>
              <td>Facebook, MAU<sup>7</sup></td>
              <td>2.6 billion</td>
            </tr>
            <tr>
              <td>Instagram, MAU<sup>8</sup></td>
              <td>1 billion</td>
            </tr>
            <tr>
              <td>Twitter, MAU<sup>9</sup></td>
              <td>150 million</td>
            </tr>
            <tr>
              <td>Snapchat, MAU<sup>10</sup></td>
              <td>230 million</td>
            </tr>
            <tr>
              <td>LinkedIn, MAU<sup>11</sup></td>
              <td>600 million</td>
            </tr>
            <tr>
              <td>Amazon Prime, subscribers<sup>12</sup></td>
              <td>110 million</td>
            </tr>
            <tr>
              <td>Amazon Prime, avg yearly spend/subscriber<sup>12</sup></td>
              <td>$1,400</td>
            </tr>
            <tr>
              <td>Amazon Prime, avg yearly spend/non-subscriber<sup>12</sup></td>
              <td>$600</td>
            </tr>
            <tr>
              <td>Netflix, subscribers (world)<sup>13</sup></td>
              <td>180 million</td>
            </tr>
            <tr>
              <td>Netflix, subscribers (U.S.)<sup>13</sup></td>
              <td>70 million</td>
            </tr>
          </table>
          <p>
            <h3>References</h3>
            <p>1 <a target="_blank" rel="noopener noreferrer" href="https://www.worldometers.info/world-population/">https://www.worldometers.info/world-population/</a></p>
            <p>2 <a target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/List_of_countries_by_life_expectancy">https://en.wikipedia.org/wiki/List_of_countries_by_life_expectancy</a></p>
            <p>3 <a target="_blank" rel="noopener noreferrer" href="https://www.computerhope.com/issues/chspace.htm">https://www.computerhope.com/issues/chspace.htm</a></p>
            <p>4 <a target="_blank" rel="noopener noreferrer" href="https://wallethacks.com/average-median-income-in-america/">https://wallethacks.com/average-median-income-in-america/</a></p>
            <p>5 <a target="_blank" rel="noopener noreferrer" href="https://www.theverge.com/2019/1/29/18202736/apple-devices-ios-earnings-q1-2019">https://www.theverge.com/2019/1/29/18202736/apple-devices-ios-earnings-q1-2019</a></p>
            <p>6 <a target="_blank" rel="noopener noreferrer" href="https://news.microsoft.com/bythenumbers/en/windowsdevices">https://news.microsoft.com/bythenumbers/en/windowsdevices</a></p>
            <p>7 <a target="_blank" rel="noopener noreferrer" href="https://www.statista.com/statistics/264810/number-of-monthly-active-facebook-users-worldwide/">https://www.statista.com/statistics/264810/number-of-monthly-active-facebook-users-worldwide/</a></p>
            <p>8 <a target="_blank" rel="noopener noreferrer" href="https://www.statista.com/statistics/253577/number-of-monthly-active-instagram-users/">https://www.statista.com/statistics/253577/number-of-monthly-active-instagram-users/</a></p>
            <p>9 <a target="_blank" rel="noopener noreferrer" href="https://www.statista.com/statistics/242606/number-of-active-twitter-users-in-selected-countries/">https://www.statista.com/statistics/242606/number-of-active-twitter-users-in-selected-countries/</a></p>
            <p>10 <a target="_blank" rel="noopener noreferrer" href="https://www.statista.com/statistics/545967/snapchat-app-dau/">https://www.statista.com/statistics/545967/snapchat-app-dau/</a></p>
            <p>11 <a target="_blank" rel="noopener noreferrer" href="https://www.statista.com/topics/951/linkedin/">https://www.statista.com/topics/951/linkedin/</a></p>
            <p>12 <a target="_blank" rel="noopener noreferrer" href="https://www.statista.com/statistics/546894/number-of-amazon-prime-paying-members/">https://www.statista.com/statistics/546894/number-of-amazon-prime-paying-members/</a></p>
            <p>13 <a target="_blank" rel="noopener noreferrer" href="https://www.statista.com/statistics/250934/quarterly-number-of-netflix-streaming-subscribers-worldwide/">https://www.statista.com/statistics/250934/quarterly-number-of-netflix-streaming-subscribers-worldwide/</a></p>
          </p>
        </div>
      </div>
      <footer className="App-footer">
        <div><a href="#top">Go To Top</a></div>
      </footer>
    </div >
  );
}

export default App;
