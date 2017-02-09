'use strict';

var React = require('react-native');
var LoginContainer = require('./LoginContainer');
var FridgeContainer = require('./FridgeContainer');
var RecipiesContainer = require('./RecipiesContainer');

var {
  View,
  Text,
  Component,
  TabBarIOS,
  Animated,
  StyleSheet,
} = React;

class AppContainer extends Component{

  constructor(props){
    super(props);
    this.state = {
      isLoggedIn:false,
      userIsNew:true,
    };
  }

  getInitialState(){
    return {
      isLoggedIn:true,
    }
  }

  _onLogin(){
    this.setState({
        isLoggedIn:true
    });
  }

  userAuthentified(){
      return 0;
  }

  render() {
      console.log(this.state.isLoggedIn)
      if(!this.state.isLoggedIn) return <LoginContainer AppContainer={this} />
      else if(this.state.userIsNew==true && this.state.isLoggedIn) return <FridgeContainer AppContainer={this}/>
      else return <RecipiesContainer/>

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


module.exports = AppContainer;
