/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var IngredientsSelector = require('./IngredientsSelector');
var {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} = React;

let categories = ['Fruits & Vegetables','Proteins','Diary Products','Grains'];
let categoryIndex = 0;

var FillFridgeStart = React.createClass({

    getInitialState(){
            return {
                categoryIndex:this.props.categoryIndex,
            }
    },

    nextIngredientsCategory(){

        if(categoryIndex==2){

            this.props.navigator.push({
                component: IngredientsSelector,
                rightButtonTitle:'Go',
                onRightButtonPress: () => {
                    this.props.AppContainer.setState({userIsNew:false});
                },
                onLeftButtonPress:()=> this.lastIngredientsCategory(),
                title: categories[3],
                passProps:{
                    category:categories[3],
                    introMessage:`Select the ${categories[3]} that you currently have.`,
                    AppContainer:this.props.AppContainer
                }
            });

        }else{

            categoryIndex++;

            this.props.navigator.push({
                component: IngredientsSelector,
                rightButtonTitle:'Next',
                onRightButtonPress: () => {
                    this.nextIngredientsCategory()
                },
                onLeftButtonPress:()=> this.lastIngredientsCategory(),
                title: categories[categoryIndex],
                passProps:{
                    category:categories[categoryIndex],
                    introMessage:`Select the ${categories[categoryIndex]} that you currently have.`,
                    AppContainer:this.props.AppContainer
                }
            });

        }


    },

    startFillingFridge(){
        this.props.navigator.push({
            component: IngredientsSelector,
            rightButtonTitle:'Next',
            onRightButtonPress: () => this.nextIngredientsCategory(),
            title: categories[categoryIndex],
            passProps:{
                category:categories[categoryIndex],
                introMessage:`Select the ${categories[categoryIndex]} that you currently have.`,
                AppContainer:this.props.AppContainer
            }
        });
    },
    render: function() {

        console.log('in fridege fill start ',this.props.AppContainer);
        return (
          <View style={styles.container}>
            <Text style={styles.welcome}>
                Welcome to Tummy!
            </Text>
            <Text style={styles.subLead}>
                Tell us what you have, we'll let you know what you can do.
            </Text>

            <TouchableHighlight
              onPress={this.startFillingFridge}
              style={styles.button}>
              <Text style={styles.buttonText}>Get Started</Text>
            </TouchableHighlight>

          </View>

        );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
  lead:{
      fontFamily: 'Montserrat-Regular',
      fontSize: 15,
  },
  subLead:{
      fontFamily: 'Montserrat-Regular',
      fontSize: 12,
      color:'#333',
  },
  instructions: {
      fontFamily: 'Montserrat-Regular',
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button:{
    height :40,
    backgroundColor:'#ef153c',//#3a97e8, #f2f2f2,
    alignSelf:'center',
    width:200,
    alignItems:'center',
    justifyContent:'center',
    marginTop:20,
    borderRadius:10,
  },
  buttonText:{
    fontSize:16,
    color:'white'
},
});

module.exports = FillFridgeStart;
