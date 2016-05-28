import React from 'react';
import ReactDOM from 'react-dom';

window.React = React;
window.ReactDOM = ReactDOM;

import {App} from './app';

ReactDOM.render(<App counters={[
    { title: "Vitories", initialValue: 10 },
    { title: "Defeats", initialValue: 20 },
    { title: "Sucks", initialValue: 9000 }
]} />, document.getElementById('app'));
