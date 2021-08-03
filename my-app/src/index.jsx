import React from 'react';
import { render } from 'react-dom';
import './style.css';

const App = () => (
  <>
    <div className="container">
      <header>
        <img className="introductoryImg" src="./img/vetvicka.jpg"></img>
        <h1>FromCuteKate</h1>
      </header>
      <main>
        <div className="introductory">
          <img
            className="arrowIntroductory bounceRight"
            src="./img/right-arrow.png"
          ></img>
          <a>Vstoupit</a>
          <img
            className="arrowIntroductory bounceLeft"
            src="./img/left-arrow.png"
          ></img>
        </div>
        <p>Vyrobeno s láskou, inspirováno přírodou.</p>
      </main>
    </div>
  </>
);

render(<App />, document.querySelector('#app'));
