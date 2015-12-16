/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
} = React;

// var Router = require('react-native-router');
var TwitterApp = require('./node_modules/react-native-router/twitter-example');

AppRegistry.registerComponent('NavigationExperimentOne', () => TwitterApp);
