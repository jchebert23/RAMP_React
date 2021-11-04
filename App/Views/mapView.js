import * as React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, FlatList, Image, TouchableOpacity } from 'react-native';
import healthLocations from '../Models/Data/healthLocations';

function Item({ item }) {
    return (
      <View style={styles.listItem}>
        <item.photo width={60} height={60} borderRadius={30} />
        <View style={{alignItems:"center",flex:1}}>
          <Text style={{fontWeight:"bold", textAlign:"center"}}>{item.name}</Text>
          <Text style={{textAlign:"center"}}>{item.locationType}</Text>
        </View>
        <TouchableOpacity style={{height:50,width:70, justifyContent:"center",alignItems:"center"}}>
          <Text style={{color:"green"}}>Directions</Text>
        </TouchableOpacity>
      </View>
    );
  }

export default function MapScreen() {
  
  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
      <FlatList
          style={{flex:1,paddingVertical:20}}
          data={healthLocations}
          renderItem={({ item }) => <Item item={item}/>}
          keyExtractor={item => item.email}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    flexDirection: 'column'
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height/2.33,
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