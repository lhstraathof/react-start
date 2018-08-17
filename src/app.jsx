import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './components/HelloWorld';
import 'normalize.css';
import './styles/styles.scss';

const App = () => {
  return (
    <div>
      <HelloWorld />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));