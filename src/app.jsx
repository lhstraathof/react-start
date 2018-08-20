import React from 'react';
import ReactDOM from 'react-dom';
// Global css imports before the other components. So their style is set first.
import 'normalize.css';
import './styles/styles.scss';

import HelloWorld from './components/HelloWorld';

const App = () => {
  return (
    <div>
      <HelloWorld />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));