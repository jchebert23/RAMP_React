import HomeScreen  from "../Views/homeScreen"
import MapScreen from "../Views/mapScreen"
import GuideScreen from "../Views/guideScreen";
import React from 'react';
import { Text, View, FlatList, Image, TouchableOpacity, useWindowDimensions, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { getNavigationStyles } from "../Views/styles";
import { NavBarHeader } from "../Views/navBarHeader";
import { getResourceIcon } from "../Controllers/commonController";

const Stack = createStackNavigator();
const styles = getNavigationStyles()

function NavigationTool() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
            headerMode: 'screen',
            headerStyle: {
              height: 150
            },
            header: ({route}) =>{
              if(route.name ==="Home")
              {
                return(<Text> Hello World </Text>)
              }
              else
              {
                const ResourceIcon = getResourceIcon(route.params.resource.routeID)
                return (
                  <View style={styles.headerContainer}>
                    <View style={styles.iconAtTopOfScreen}>
                        <ResourceIcon width="78%" height="78%"/>
                    </View>
                  </View>
                );
              }
            }
          }
        }>
        <Stack.Screen name="Home" component={HomeScreen} options={{title: 'Resource Access Mapping Project'}} />
        <Stack.Screen name="Map" component={MapScreen} options={{title: 'Health Resources'}} />
        <Stack.Screen name="Guide" component={GuideScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavigationTool;