import React from 'react';
import ReactDOM from 'react-dom';

import Hello from './Hello/index';
import World from './World/index';

ReactDOM.render(<Hello />, document.getElementById('hello'));
ReactDOM.render(<World />, document.getElementById('world'));