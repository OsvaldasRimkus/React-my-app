import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// import Game from './classes/Game';
import MyRouter from './classes/MyRouter';





// ========================================

ReactDOM.render(
  // <Game />,
  <MyRouter />,
  document.getElementById('root')
);

registerServiceWorker();
