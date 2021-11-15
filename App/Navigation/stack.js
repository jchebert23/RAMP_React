import HomeScreen  from "../Views/homeScreen"
import MapScreen from "../Views/mapScreen"
import GuideScreen from "../Views/guideScreen";
import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { getNavigationStyles } from "../Views/styles";
import { getResourceIcon } from "../Controllers/commonController";
import { HeaderBackButton } from "@react-navigation/elements";

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
            header: ({route,navigation}) =>{
              if(route.name ==="Home")
              {
                return(<Text> Resource Access Mapping Project </Text>)
              }
              else
              {
                const ResourceIcon = getResourceIcon(route.params.resource.id)
                return(<Header Icon={ResourceIcon} nav={navigation}/>);
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

function Header(props){
  return(
  <View style={styles.headerContainer}>
    <View style={styles.headerLeftContainer}>
      <HeaderBackButton style={styles.backButton} onPress={()=> props.nav.goBack()}/>
    </View>
    <View style={styles.headerCenterContainer}>
        <View style={styles.centerIcon}>
          <props.Icon width="78%" height="78%"/>
        </View>
    </View>
    <View style={styles.headerRightContainer}/>
  </View>)
}

export default NavigationTool;