'use strict';

var React = require('react-native');
var GridView = require('react-native-grid-view');
var IngredientItem = require('./IngredientItem');
// var DOMParser = require('xmldom').DOMParser

var {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Component,
} = React;

class IngredientsSelector extends Component{

  constructor(props){
    super(props);

    var ingredientsArray = [];

    switch(props.category){
        case "Fruits & Vegetables":
            ingredientsArray = [{
                title: 'Tomato',
                url: "file:///Users/WASSIMATHIMNI/Google%20Drive/Developer/Sandbox/ReactNative/Yummy/data/images/Tomato.png"
            }, {
                title: 'Apple',
                url: "file:///Users/WASSIMATHIMNI/Google%20Drive/Developer/Sandbox/ReactNative/Yummy/data/images/Apple.png"
            }, {
                title: 'Lemon',
                url: "file:///Users/WASSIMATHIMNI/Google%20Drive/Developer/Sandbox/ReactNative/Yummy/data/images/Lemon.png"
            }, {
                title: 'Watermelon',
                url: "file:///Users/WASSIMATHIMNI/Google%20Drive/Developer/Sandbox/ReactNative/Yummy/data/images/Watermelon.png"
            }, {
                title: 'Banana',
                url: "file:///Users/WASSIMATHIMNI/Google%20Drive/Developer/Sandbox/ReactNative/Yummy/data/images/Banana.png"
            }, {
                title: 'Celery',
                url: "file:///Users/WASSIMATHIMNI/Google%20Drive/Developer/Sandbox/ReactNative/Yummy/data/images/Celery.png"
            }, {
                title: 'Lettuce',
                url: "file:///Users/WASSIMATHIMNI/Google%20Drive/Developer/Sandbox/ReactNative/Yummy/data/images/Lettuce.png"
            }]; break;
        case "Proteins":
            ingredientsArray = [{
                title: 'Chicken Breast',
                url: "file:///Users/WASSIMATHIMNI/Google%20Drive/Developer/Sandbox/ReactNative/Yummy/data/images/ChickenBreast.png"
            }, {
                title: 'Tuna',
                url: "file:///Users/WASSIMATHIMNI/Google%20Drive/Developer/Sandbox/ReactNative/Yummy/data/images/Tuna.png"
            }, {
                title: 'Salmon',
                url: "file:///Users/WASSIMATHIMNI/Google%20Drive/Developer/Sandbox/ReactNative/Yummy/data/images/Salmon.png"
            }, {
                title: 'Sausage',
                url: "file:///Users/WASSIMATHIMNI/Google%20Drive/Developer/Sandbox/ReactNative/Yummy/data/images/Sausage.png"
            }, {
                title: 'Ham',
                url: "file:///Users/WASSIMATHIMNI/Google%20Drive/Developer/Sandbox/ReactNative/Yummy/data/images/Ham.png"
            }, {
                title: 'Tofu',
                url: "file:///Users/WASSIMATHIMNI/Google%20Drive/Developer/Sandbox/ReactNative/Yummy/data/images/Tofu.png"
            }, {
                title: 'Entrecote',
                url: "file:///Users/WASSIMATHIMNI/Google%20Drive/Developer/Sandbox/ReactNative/Yummy/data/images/Entrecote.png"
            }]; break;
        case "Diary Products":
            ingredientsArray = [{
                title: 'Milk',
                url: "file:///Users/WASSIMATHIMNI/Google%20Drive/Developer/Sandbox/ReactNative/Yummy/data/images/Milk.png"
            }, {
                title: 'Cheddar Cheese',
                url: "file:///Users/WASSIMATHIMNI/Google%20Drive/Developer/Sandbox/ReactNative/Yummy/data/images/CheddarCheese.png"
            }, {
                title: 'Mozzarella',
                url: "file:///Users/WASSIMATHIMNI/Google%20Drive/Developer/Sandbox/ReactNative/Yummy/data/images/Mozzarella.png"
            }, {
                title: 'Mayonnaise',
                url: "file:///Users/WASSIMATHIMNI/Google%20Drive/Developer/Sandbox/ReactNative/Yummy/data/images/Mayonnaise.png"
            }, {
                title: 'Cream',
                url: "file:///Users/WASSIMATHIMNI/Google%20Drive/Developer/Sandbox/ReactNative/Yummy/data/images/Cream.png"
            }, {
                title: 'Gouda',
                url: "file:///Users/WASSIMATHIMNI/Google%20Drive/Developer/Sandbox/ReactNative/Yummy/data/images/Gouda.png"
            }, {
                title: 'Swiss Cheese',
                url: "file:///Users/WASSIMATHIMNI/Google%20Drive/Developer/Sandbox/ReactNative/Yummy/data/images/SwissCheese.png"
            }]; break;
        case "Grains":
            ingredientsArray = [{
                title: 'Chickpea',
                url: "file:///Users/WASSIMATHIMNI/Google%20Drive/Developer/Sandbox/ReactNative/Yummy/data/images/Chickpea.png"
            }, {
                title: 'Bean',
                url: "file:///Users/WASSIMATHIMNI/Google%20Drive/Developer/Sandbox/ReactNative/Yummy/data/images/Lentil.png"
            }, {
                title: 'Pea',
                url: "file:///Users/WASSIMATHIMNI/Google%20Drive/Developer/Sandbox/ReactNative/Yummy/data/images/Pea.png"
            }, {
                title: 'Soybean',
                url: "file:///Users/WASSIMATHIMNI/Google%20Drive/Developer/Sandbox/ReactNative/Yummy/data/images/Soybean.png"
            }, {
                title: 'Almonds',
                url: "file:///Users/WASSIMATHIMNI/Google%20Drive/Developer/Sandbox/ReactNative/Yummy/data/images/Almonds.png"
            }, {
                title: 'Walnut',
                url: "file:///Users/WASSIMATHIMNI/Google%20Drive/Developer/Sandbox/ReactNative/Yummy/data/images/Walnut.png"
            }, {
                title: 'Pecans',
                url: "file:///Users/WASSIMATHIMNI/Google%20Drive/Developer/Sandbox/ReactNative/Yummy/data/images/Pecans.png"
            }]; break;
        default:
            this.state = {
              ingredients:[{title:'Chicken Breast',url:"file:///Users/WASSIMATHIMNI/Google%20Drive/Developer/Sandbox/ReactNative/Yummy/data/images/ChickenBreast.png"},
                            {title:'Chicken Breast',url:"file:///Users/WASSIMATHIMNI/Google%20Drive/Developer/Sandbox/ReactNative/Yummy/data/images/ChickenBreast.png"},
                            {title:'Chicken Breast',url:"file:///Users/WASSIMATHIMNI/Google%20Drive/Developer/Sandbox/ReactNative/Yummy/data/images/ChickenBreast.png"},
                            {title:'Chicken Breast',url:"file:///Users/WASSIMATHIMNI/Google%20Drive/Developer/Sandbox/ReactNative/Yummy/data/images/ChickenBreast.png"},
                            {title:'Chicken Breast',url:"file:///Users/WASSIMATHIMNI/Google%20Drive/Developer/Sandbox/ReactNative/Yummy/data/images/ChickenBreast.png"},
                            {title:'Chicken Breast',url:"file:///Users/WASSIMATHIMNI/Google%20Drive/Developer/Sandbox/ReactNative/Yummy/data/images/ChickenBreast.png"},
                            {title:'Chicken Breast',url:"file:///Users/WASSIMATHIMNI/Google%20Drive/Developer/Sandbox/ReactNative/Yummy/data/images/ChickenBreast.png"}],
            };
            break;
    }

    this.state = {
      ingredients:ingredientsArray
    };

  }


  onSearchPressed(){
    this.props.navigator.push({
        component: SearchResults,
        title: `${this.state.searchstring} - Results`,
        passProps: {
            searchstring: this.state.searchstring
        }
    });
  }

  _renderItem(item) {
    return (<IngredientItem navigator={this.props.navigator} ingredients={item}/>);
  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {this.props.introMessage}
        </Text>
        <View style={styles.gridContainer}>
          <GridView
            items={this.state.ingredients}
            itemsPerRow={3}
            renderItem={this._renderItem.bind(this)}
          />
        </View>

      </View>
    );

  }
}

var styles = StyleSheet.create({
  container: {
    flex:1,
    paddingLeft:20,
    paddingRight:20,
    justifyContent:'center',
    alignItems: 'center'
  },
  gridContainer:{
      height:300,
      marginTop:0,
  },
  welcome: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    textAlign: 'center',
  },
  description: {
    marginBottom: 30,
    fontSize: 14,
    textAlign: 'center',
    color: '#8b8b8b'
  },
  searchContainer: {
    alignSelf: 'stretch'
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    flex: 1,
    backgroundColor: '#4e9ad9',
    borderRadius: 5,
    marginTop: 20,
    alignSelf: 'stretch',
    justifyContent: 'center',
    padding:10,
  },
  searchInput: {
    height: 36,
    padding: 6,
    marginRight: 5,
    flex: 1,
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#c8c8c8',
    borderRadius: 5,
    color: '#000',
    textAlign:'center',
  }
});

module.exports = IngredientsSelector;
