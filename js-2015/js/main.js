
'use strict';

import reddit from './reddit';
import filter from './filter';
import display from './display';

reddit().then(filter).then(display);