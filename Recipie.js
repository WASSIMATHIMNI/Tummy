'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Component,
  Image,
} = React;

class Recipie extends Component{

  constructor(props){
    super(props);
    this.state = {
      recipie:props.recipie,
    };
  }

  render() {
      let ingredients = [];
      if(this.state.recipie.ingredients){
           ingredients= this.state.recipie.ingredients.map((elem)=>{
              return (<Text style={{flex:1,paddingRight:10,}}>{elem[0]}</Text>);
          });
      }


      console.log(ingredients);
    return (
      <View style={styles.container}>
            <Image source={{uri: this.state.recipie.imgUrl}} style={styles.recipieImage}/>
            <View style={{alignSelf:'flex-start',justifyContent:'flex-start'}}>
                <Text style={styles.recipieSubTittle}>Ingredients </Text>
                <View style={{flex:1,flexDirection:'row'}}>
                    {ingredients}
                </View>
                <View style={{flex:1,flexDirection:'row',marginTop:20,}}>
                    <View style={{flex:1}}>
                        <Text style={styles.recipieSubTittle}>Steps </Text>
                        <Text>1- Preheat oven at 425 F</Text>
                        <Text>2- Cut Potatoes into square cuts</Text>
                        <Text>3- Boil Grean beans for 8 minutes </Text>
                        <Text>4- Grill Chicken breast for 10 minutes </Text>
                        <Text>4- Bake Potatoes for 5 minutes </Text>
                        <Text>5- Dinner served. </Text>
                    </View>
                    <View style={{flex:1,justifyContent:'center'}}>
                        <Text style={styles.recipieSubTittle}># of Servings </Text>
                        <Text style={styles.recipieValue}> 3</Text>
                        <Text style={styles.recipieSubTittle}>Calories</Text>
                        <Text style={styles.recipieValue}> 550 cal</Text>
                        <Text style={styles.recipieSubTittle}>Preparing Time</Text>
                        <Text style={styles.recipieValue}> 20min</Text>
                    </View>
                </View>

            </View>

      </View>

    );
  }
}

var styles = StyleSheet.create({
    container:{
      backgroundColor:'#eee',
      flex:1,
      paddingTop:40,
      alignItems:'center',
      padding:10,
    },
    recipieContainer:{
      flex:1,
      flexDirection:'row',
      justifyContent:'center',
      padding:10,
      height:500,
      borderBottomWidth:1,
      borderColor:'#eee',
    },
    recipieTittle:{
        alignSelf:'flex-start',
        fontFamily: 'Montserrat-Regular',
        fontSize:18,
        color:'#ef153c',
        marginBottom:10,
    },
    recipieSubTittle:{
        alignSelf:'flex-start',
        fontFamily: 'Montserrat-Regular',
        fontSize:13,
        color:'#ef153c',
    },
    recipieValue:{
        fontSize:18,
    },
    recipieImage: {
        height:400,
        alignSelf: 'stretch',
        resizeMode: 'cover', // or 'stretch'
        opacity:0.6,
    },
    textLeftContainer:{
      flex:1,
      justifyContent:'center',
    },
    textRightContainer:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
    },
    titleText:{
      fontSize:15,
    },
    employerText:{
      alignSelf:'flex-start',
    },
    locationText:{
      alignSelf:'flex-start',
      marginTop:3,
      fontSize:9,
    },
});

module.exports = Recipie;
