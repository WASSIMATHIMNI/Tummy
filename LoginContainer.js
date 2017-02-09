/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');

var {
    Text,
    StyleSheet,
    View,
    Image,
    TextInput,
    TouchableHighlight,
    Component,
    ActivityIndicatorIOS
} = React;

class LoginContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      showProgress:false,
      success:false
    };
  }


  onLoginPressed(){
      this.setState({showProgress:true});

      var authService = require('./AuthService');
      authService.login({
        username: this.state.username,
        password: this.state.password
      },(results)=>{
        this.setState(Object.assign({showProgress:false},results));
        this.props.AppContainer._onLogin();
      });


  }

  render(){
    var errorCtrl = <View/>;

    console.log(this.state);

    if(!this.state.success && this.state.badCredentials){
      errorCtrl = <Text style={styles.error}>
            Bad credentials...
        </Text>
    }
    if(!this.state.success && this.state.unknownError){
      errorCtrl = <Text style={styles.error}>
            We experienced an unexpected issue...
        </Text>
    }

    return(
      <View style={styles.container}>

        <Text style={styles.heading}>
            Tummy
        </Text>

        <Text style={styles.subheading}>
            Dinner Served.
        </Text>

        <TextInput onChangeText={(text)=>this.setState({username:text})} style={styles.input} placeholder="Your email"/>
        <TextInput onChangeText={(text)=>this.setState({password:text})} style={styles.input} placeholder="Your password" secureTextEntry='true'/>

        <TouchableHighlight
          onPress={this.onLoginPressed.bind(this)}
          style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableHighlight>

        <View style={styles.quickLoginContainer}>
            <TouchableHighlight
              onPress={this.onLoginPressed.bind(this)}
              style={styles.button}>
              <Text style={styles.buttonText}>Facebook Login</Text>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={this.onLoginPressed.bind(this)}
              style={styles.button}>
              <Text style={styles.buttonText}>Twitter Login</Text>
            </TouchableHighlight>
        </View>

      {errorCtrl}

      <ActivityIndicatorIOS
          style={styles.loader}
          animating={this.state.showProgress}
          size="large"
      />

      </View>
    );
  }
};


var styles = StyleSheet.create({
  container:{
    backgroundColor:'#eee',
    flex:1,
    paddingTop:40,
    alignItems:'center',
    padding:10,
  },
  quickLoginContainer:{
      alignSelf:'stretch',
      backgroundColor:'#eee',
      flex:1,
      paddingTop:40,
      alignItems:'center',
  },
  logo:{
    width:66,
    height:55,
  },
  heading:{
    fontFamily: 'Montserrat-Regular',
    fontSize:50,
    marginTop:10,
  },
  subheading:{
      fontFamily: 'Montserrat-Regular',
      color:'#666',
      fontSize:20,
      marginTop:5,
      marginBottom:30
  },
  input:{
    marginTop:3,
    height:50,
    padding:10,
    borderWidth:1,
    borderRadius:10,
    borderColor:'#ddd'
  },
  button:{
    height :40,
    backgroundColor:'#ef153c',//#3a97e8, #f2f2f2,
    alignSelf:'stretch',
    alignItems:'center',
    justifyContent:'center',
    marginTop:10,
    borderRadius:10,
  },
  buttonText:{
    fontSize:16,
    color:'white'
  },
  loader:{
    marginTop:30,
  },
  error:{
    color:'red',
    paddingTop:10,
  }

});

module.exports = LoginContainer;
