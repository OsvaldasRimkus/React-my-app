import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import Game from './classes/Game';





// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

registerServiceWorker();
