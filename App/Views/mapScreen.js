import * as React from 'react';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, FlatList, Image, TouchableOpacity } from 'react-native';
import { getHealthLocations } from '../Controllers/mapScreenController';
import {getMapScreenStyles} from "./styles.js"

const styles = getMapScreenStyles()

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
  const healthLocations = getHealthLocations()
  return (
    <View style={styles.container}>
      <MapView 
      style={styles.map}
      initialRegion={{
        latitude: 41.3083,
        longitude: -72.9279,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      >
      {healthLocations.map((location, index) => (
     <Marker
        key={index}
        coordinate={location.location}
        title={location.name}
        description={"Default Text"}
      />
      ))}
      </MapView>
      <FlatList
          style={{flex:1,paddingVertical:20}}
          data={healthLocations}
          renderItem={({ item }) => <Item item={item}/>}
          keyExtractor={item => item.email}
        />
    </View>
  );
}
