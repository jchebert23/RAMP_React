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
      <View style={{flex:1, justifyContent: "center"}}>
        <View style={{alignItems:"center", marginHorizontal: 5, justifyContent: "center", borderColor: "grey", borderWidth: ".5",
          backgroundColor:item.color, 
          shadowColor: '#000',
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
      <View style = {{flex:1, flexDirection: "column", borderColor: "black", borderWidth: "2"}}>
        <View style= {{flex:5, borderColor: "black", borderBottomWidth: "2"}}>
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
        <View style= {{flex:1}}>
            <View style = {{flex:1, flexDirection: "row"}}>
              <MapKeyItem item={resourceGroups[0]}/>
              <MapKeyItem item={resourceGroups[1]}/>
              <MapKeyItem item={resourceGroups[2]}/>
            </View>
            <View style = {{flex:1, flexDirection: "row"}}>
              <MapKeyItem item={resourceGroups[3]}/>
              <MapKeyItem item={resourceGroups[4]}/>
              <MapKeyItem item={resourceGroups[5]}/>
            </View>
        </View>
      </View>
    </View>
  );
}

