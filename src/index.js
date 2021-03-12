import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import './index.scss';

import { Header, Subheader } from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Subheader>front-end web developer</Subheader>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
