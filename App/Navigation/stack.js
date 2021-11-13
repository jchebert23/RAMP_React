import HomeScreen  from "../Views/homeScreen"
import MapScreen from "../Views/mapScreen"
import GuideScreen from "../Views/guideScreen";
import React from 'react';
import { Text, View, FlatList, Image, TouchableOpacity, useWindowDimensions, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getNavigationStyles } from "../Views/styles";

const Stack = createNativeStackNavigator();
const styles = getNavigationStyles()
function NavigationTool() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{title: 'Resource Access Mapping Project'}} />
        <Stack.Screen name="Map" component={MapScreen} options={{title: 'Health Resources'}} />
        <Stack.Screen name="Guide" component={GuideScreen} 
        options={({route})=>
          ({
            headerTitle: () =>   
            <View style={styles.iconAtTopOfScreen}>
                <route.params.resource.icon width="78%" height="78%"/>
            </View>
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavigationTool;