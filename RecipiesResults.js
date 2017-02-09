/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Recipie = require('./Recipie');
var {
  StyleSheet,
  Text,
  ListView,
  TouchableHighlight,
  ActivityIndicatorIOS,
  View,
  Component,
  Image,
} = React;

class RecipiesResults extends Component{

    constructor(props){
      super(props);
      var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

      let recipies = require('./data/recipies');

      this.state = {
          bookmarkAvailable:true,
          showProgress: false,
          searchstring: props.searchstring,
          dataSource: ds.cloneWithRows(recipies),
      }
    }

    componentDidMount(){
        this._fetchJobs();
    }

    _onBookmarkedJob(elem){
        this.setState({bookmarkAvailable:!this.state.bookmarkAvailable});
    }

    _rowPressed(elem) {
      this.props.navigator.push({
          component: Recipie,
          title: elem.title,
          rightButtonTitle:'Save',
          passProps: {
              recipie: elem,
          }
      });
    }


    _renderRow(rowData, sectionID, rowID) {
      return (
        <TouchableHighlight
          onPress={() => this._rowPressed(rowData)}
            underlayColor='#dddddd'>
              <View  style={styles.recipieContainer}>
                  <View style={{position:'absolute'}}>
                      <Text style={[styles.recipieTittle,{flex:1,selfAlign:'center'}]}>{rowData.title}</Text>
                  </View>


                  <Image source={{uri: rowData.imgUrl}} style={styles.backgroundImage}/>

              </View>
        </TouchableHighlight>
      );
    }

    _fetchJobs(){
      let uri = `http://jobbank.gc.ca/jobSearchRSS.do?searchstring=${this.state.searchstring}&button.submit=Search`;

      fetch(uri)
      .then((result)=>{
        if(result.status === 200) return result;
      })
      .then((result)=>{
        let text = result.text();
        let doc = new DOMParser().parseFromString(text._12);
        let entries = doc.documentElement.getElementsByTagName('entry');

        var entriesKeys = Object.keys(entries);
        let jobs = entriesKeys.map((index)=>{
          return entries[index].textContent;
        })

        // this.setState({
        //     dataSource: this.state.dataSource.cloneWithRows(jobs)
        // });

      })
      .finally(()=> {
          this.setState({
              showProgress: false
          });
      });

    }

  render(){
      if(this.state.showProgress){
          return (
              <View style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems:'center',
              }}>
                  <ActivityIndicatorIOS
                      size="large"
                      animating={true} />
              </View>
          );
        }
        return (
          <View style={{
              flex: 1
          }}>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this._renderRow.bind(this)}
          />
          </View>
        );
  }
}

var styles = StyleSheet.create({
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
        position:'absolute',
        top:20,
        left:10,
        fontFamily: 'Montserrat-Regular',
        fontSize:16,
        color:'#ef153c',
    },
    backgroundImage: {
        flex: 1,
        alignSelf: 'stretch',
        resizeMode: 'cover', // or 'stretch'
        opacity:0.5,
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

module.exports = RecipiesResults;
