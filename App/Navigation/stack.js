import HomeView  from "../Views/homeScreenView"
import MapScreen from "../Views/mapView"
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function NavigationTool() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeView} options={{title: 'Resource Access Mapping Project'}} />
        <Stack.Screen name="Map" component={MapScreen} options={{title: 'Health Resources'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavigationTool;