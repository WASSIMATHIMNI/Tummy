'use strict';
var React = require('react-native');

var {
  StyleSheet,
  TouchableHighlight,
  View,
  Component,
  Image,
  Text,
} = React;

class IngredientItem extends Component{

  constructor(props){
    super(props);
    this.state = {
        selected:false,
    }
  }

  _coursePressed(item) {
    console.log(item);
  }

  render() {
    return (
      <TouchableHighlight
          onPress={() => this.setState({selected:!this.state.selected})}
          style={this.state.selected ? styles.courseButton : [styles.courseButton,styles.unselected] }
          underlayColor='#fff'>
            <View  style={styles.courseItemContainer}>
                <Image
                    style={styles.ingredientImage}
                    source={{uri: this.props.ingredients.url}}
                    resizeMode="scale-to-fill"
                  />
              <Text style={{color:'white',fontFamily: 'Montserrat-Regular'}}>{this.props.ingredients.title}</Text>
            </View>
      </TouchableHighlight>
    );
  }
}

var styles = StyleSheet.create({
  unselected:{
      opacity:0.3,
  },
  courseItemContainer:{
    alignItems:'center',
    paddingBottom:20,
  },
  ingredientImage:{
      flex:1,
      justifyContent:'center',
      height:100,
      width:100,
  },
  courseButton:{
    flex:1,
    justifyContent:'center',
    height:100,
    width:100,
    backgroundColor:'#464646',
    borderRadius:5,
    margin:10,
    overflow:'hidden',
  }
});

module.exports = IngredientItem;
