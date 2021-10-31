import React from 'react';
import MySVGs from './icons';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';

function Item({ item }) {
  return (
    <View style={styles.listItem}>
      <item.icon width={60} height={60} />
      <View style={{alignItems:"center",flex:1}}>
        <Text style={{fontWeight:"bold"}}>{item.name}</Text>
        <Text>{item.position}</Text>
      </View>
      <TouchableOpacity style={{height:50,width:50, justifyContent:"center",alignItems:"center"}}>
        <Text style={{color:"green"}}>Call</Text>
      </TouchableOpacity>
    </View>
  );
}

export default class App extends React.Component {
  state = {
    data:[
        {
            "name": "Miyah Myles",
            "email": "miyah.myles@gmail.com",
            "position": "Data Entry Clerk",
            "icon": MySVGs.Community
        },
        {
            "name": "June Cha",
            "email": "june.cha@gmail.com",
            "position": "Sales Manager",
            "icon": MySVGs.Health
        },
        {
            "name": "Iida Niskanen",
            "email": "iida.niskanen@gmail.com",
            "position": "Sales Manager",
            "icon": MySVGs.Food
        }
    ]
  }


  render(){
    return (
      <View style={styles.container}>
        <FlatList
          style={{flex:1}}
          data={this.state.data}
          renderItem={({ item }) => <Item item={item}/>}
          keyExtractor={item => item.email}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    marginTop:60
  },
  listItem:{
    margin:10,
    padding:10,
    backgroundColor:"#FFF",
    width:"80%",
    flex:1,
    alignSelf:"center",
    flexDirection:"row",
    borderRadius:5
  }
});