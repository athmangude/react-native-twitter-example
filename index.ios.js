/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Component
} = React;

var Router = require('react-native-router');

class HelloPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Text>Hello World</Text>
        );
    }
}

var firstRoute = {
    name: 'Welcome',
    component: HelloPage
}

class NavigationExperimentOne extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <Router firstRoute={firstRoute} />
        );
    }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('NavigationExperimentOne', () => NavigationExperimentOne);
