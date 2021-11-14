import HomeScreen  from "../Views/homeScreen"
import MapScreen from "../Views/mapScreen"
import GuideScreen from "../Views/guideScreen";
import React from 'react';
import { Text, View, FlatList, Image, TouchableOpacity, useWindowDimensions, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { getNavigationStyles } from "../Views/styles";
import Transportation from '../../assets/ramp_icons/MainNavIcons/transportation_1.svg'

const Stack = createStackNavigator();
const styles = getNavigationStyles()
function NavigationTool() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
          headerMode: 'screen',
          header: (p) =>
              <Header/>,
          headerStyle: {
            height: 300
          }
        }}>
        <Stack.Screen name="Home" component={HomeScreen} options={{title: 'Resource Access Mapping Project'}} />
        <Stack.Screen name="Map" component={MapScreen} options={{title: 'Health Resources'}} />
        <Stack.Screen name="Guide" component={GuideScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Header(){
  return (
    <View style={styles.headerContainer}>
      <View style={styles.iconAtTopOfScreen}>
          <Transportation width="78%" height="78%"/>
      </View>
    </View>
  );
}

export default NavigationTool;