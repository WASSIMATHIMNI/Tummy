/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var RecipiesResults = require('./RecipiesResults');
// var Icon = require('react-native-vector-icons/Ionicons');

var {
    Component,
    NavigatorIOS,
} = React;

var RecipiesContainer = React.createClass({
    render() {
      return (
        <NavigatorIOS
            ref="nav"
            barTintColor='#f2f2f2'
            titleTextColor='#ef153c'
            tintColor='#ef153c'
            style={{
                flex: 1
            }}
            initialRoute={{
                component: RecipiesResults,
                title: 'Food Within Your Power',
                leftButtonTitle:'Fridge',
                rightButtonTitle:'Filter',
            }}
        />
      );
    }
});

module.exports = RecipiesContainer;
