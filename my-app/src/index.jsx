import React from 'react';
import { render } from 'react-dom';
import './style.css';

const App = () => (
  <>
    <section className="sectionIntroduction">
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
          <a href="#sectionKata">
            <img
              className="arrowIntroductory bounceDown"
              src="./img/down-sketched-arrow.png"
            ></img>
          </a>
        </div>
      </main>
    </section>
    <section className="sectionKata" id="sectionKata">
      <img className="profil" src="./img/profil.jpg"></img>
      <h1 className="aboutMe">Kdo jsem</h1>
      <p className="textAboutMe">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Mauris
        elementum mauris vitae tortor. Fusce consectetuer risus a nunc. Etiam
        posuere lacus quis dolor. Curabitur bibendum justo non orci. Fusce
        suscipit libero eget elit. Integer pellentesque quam vel velit. In
        convallis. Suspendisse sagittis ultrices augue. Morbi imperdiet, mauris
        ac auctor dictum, nisl ligula egestas nulla, et sollicitudin sem purus
        in lacus.
      </p>
    </section>
  </>
);

render(<App />, document.querySelector('#app'));
