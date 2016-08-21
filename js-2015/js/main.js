
import reddit from './reddit';
import filter from './filter';
import display from './display';


var onResolve = display;
reddit().then(filter).
then(onResolve);