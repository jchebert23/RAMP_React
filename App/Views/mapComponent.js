import * as React from 'react';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { View } from 'react-native';
import { getLocations } from '../Controllers/mapScreenController';
import { getMapComponentStyles } from "./styles/mapComponentStyles.js"

const styles = getMapComponentStyles()

export default function Map({ markers }) {
  const locations = getLocations(markers)
  return (
      <MapView 
        style = {styles.map}
        initialRegion={{
          latitude: 41.3083,
          longitude: -72.9279,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        >
        {locations.map((location, index) => (
      <Marker
          key={index}
          coordinate={location.location}
          title={location.name}
          pinColor={location.color}
          description={"Default Text"}
        />
        ))}
        </MapView>
  );
}

