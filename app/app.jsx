var React = require('react');
var ReactDOM = require('react-dom');

var objectOne = {
  name: 'Mo',
  location: 'San Francisco'
};

var objectTwo = {
  age: 24,
  ...objectOne
};

console.log(objectTwo);
ReactDOM.render(
  <h1>Boilerplate app</h1>,
  document.getElementById('app')
);
