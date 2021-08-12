import React from 'react';
import { render } from 'react-dom';
import './style.css';

const App = () => (
  <>
    <div className="container">
      <header>
        <img className="introductoryImg" src="./img/vetvicka.jpg"></img>
        <h1>FromCuteKate</h1>
        <img className="introductorySeparator" src="./img/separator1.png"></img>
      </header>
      <main>
        <div className="introductory">
          <p>Vyrobeno s láskou, inspirováno přírodou.</p>
        </div>
        <div className="introductory">
          <img
            className="arrowIntroductory bounceDown"
            src="./img/down-sketched-arrow.png"
          ></img>
        </div>
      </main>
    </div>
  </>
);

render(<App />, document.querySelector('#app'));
