import React from 'react';
import ReactDOM from 'react-dom';

import cat from './img/cat.gif';
import './index.css';
import './index.scss';

import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <img src={cat} />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
