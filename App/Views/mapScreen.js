import * as React from 'react';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import { getHealthLocations } from '../Controllers/mapScreenController';
import { getResourceIcon } from '../Controllers/commonController.js';
import {getMapScreenStyles} from "./styles.js"
import {getResourceGroups}  from "../Controllers/homeScreenController.js"

const styles = getMapScreenStyles()

function MapKeyItem({ item }) {
    return (
      <View style={styles.listItem}>
        <View style={{alignItems:"center",flex:1, marginHorizontal: 5, alignItems: "center", borderColor: "grey", borderWidth: ".5",
          backgroundColor:item.color, shadowColor: '#000',
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: .3,
          shadowRadius: 5,  
          elevation: 5,
          borderRadius:30}}>
          <Text>{item.label}</Text>
        </View>
      </View>
    );
  }

export default function MapScreen() {
  const healthLocations = getHealthLocations()
  const resourceGroups = getResourceGroups()
  return (
    <View style={styles.container}>
      <View style = {{flex:1, flexDirection: "row", borderColor: "black", borderWidth: "2"}}>
        <View style= {{flex:5, borderColor: "black", borderRightWidth: "2"}}>
          <MapView 
          style = {{flex:1}}
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
        </View>
        <View style= {{flex:3}}>
          <FlatList
              style = {{flex:1}}
              data={resourceGroups}
              renderItem={({ item }) => <MapKeyItem item={item}/>}
              keyExtractor={item => item.label}
            />
        </View>
      </View>
    </View>
  );
}

