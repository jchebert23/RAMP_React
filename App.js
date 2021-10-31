import React from 'react';
import MySVGs from './icons';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, useWindowDimensions, Dimensions } from 'react-native';

const numColumns = 2
const windowWidth = Dimensions.get('window').width
const tilePadding = 10
const tileWidth = (windowWidth-(numColumns*2*tilePadding))/numColumns



function Item({ item }) {
  return (
    <View style={styles.listItem}>
      <item.icon width="100%" height="100%"/>
    </View>
  );
}

export default class App extends React.Component {
  state = {
    data:[
        {
            "icon": MySVGs.Community,
            "id": "community"
        },
        {
            "icon": MySVGs.Health,
            "id": "health"
        },
        {
            "icon": MySVGs.Food,
            "id": "food"
        },
        {
          "icon": MySVGs.Employment,
          "id": "employment"
        },
        {
          "icon": MySVGs.Education,
          "id": "education"
        },
        {
          "icon": MySVGs.Housing,
          "id": "housing"
        }
    ]
  }


  render(){
    return (
      <View style={styles.container}>
        <FlatList
          style={{flex:1}}
          data={this.state.data}
          numColumns={numColumns}
          renderItem={({ item }) => <Item item={item}/>}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    marginTop:60,
    flexDirection:"column"
  },
  listItem:{
    margin:10,
    padding:tilePadding,
    backgroundColor:"#FFF",
    flexDirection:"column",
    width:tileWidth,
    height:tileWidth
  }
});