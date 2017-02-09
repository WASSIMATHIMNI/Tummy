/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var FillFridgeStart = require('./FillFridgeStart');
var {
    Component,
    NavigatorIOS,
} = React;

var FridgeContainer = React.createClass({
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
                component: FillFridgeStart,
                title: 'Tummy',
                passProps: {
                    AppContainer:this.props.AppContainer
                }
            }}
        />
      );
    }
});

module.exports = FridgeContainer;
