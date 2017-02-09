/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var AppContainer = require('./AppContainer');
var {
  AppRegistry,
  Text,
  View,
} = React;

var Yummy = React.createClass({
  render: function() {
    return (
      <AppContainer/>
    );
  }
});

AppRegistry.registerComponent('Yummy', () => Yummy);
