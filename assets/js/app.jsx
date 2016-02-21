'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Main from './components/main.react';

injectTapEventPlugin();

ReactDOM.render(<Main/>, document.getElementById('react--app'));