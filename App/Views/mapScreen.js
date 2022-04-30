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
    const ResourceIcon = getResourceIcon(item.id)
    return (
      <View style={styles.listItem}>
        <View style={{alignItems:"center",flex:4}}>
          <Text style={{fontWeight:"bold", textAlign:"center"}}>{item.label}</Text>
        </View>
        <View style={{flex: 1}}> 
          <ResourceIcon width="78%" height="78%"/>
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
              data={resourceGroups}
              renderItem={({ item }) => <MapKeyItem item={item}/>}
              keyExtractor={item => item.label}
            />
        </View>
      </View>
    </View>
  );
}

