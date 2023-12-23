`use strict`;

import './main.scss';

// import _ from 'lodash';
// import eMap from './lib/emap.js';
// import fetchData from './lib/fetchapi.js';
import { $, $$, $$$ } from './lib/pseudojQuery.js';
import * as policyDialog from './lib/policyDialog.js';

import showClickPosition from './lib/rippleBtn.js';

$$$('.btn').forEach(button => {
  button.addEventListener('click', showClickPosition);
});

policyDialog.showPolicy();
policyDialog.hidePolicy();