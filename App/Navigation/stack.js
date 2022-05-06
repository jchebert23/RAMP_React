import HomeScreen  from "../Views/homeScreen"
import MapScreen from "../Views/mapScreen"
import HomeGuideScreen from "../Views/homeGuideScreen";
import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { getNavigationStyles } from "../Views/styles/navigationStyles";
import { getResourceIcon } from "../Controllers/commonController";
import { HeaderBackButton } from "@react-navigation/elements";
import {useFonts} from 'expo-font';

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
                return(<HomeScreenHeader/>)
              }
              else
              {
                const ResourceIcon = getResourceIcon(route.params.groupId)
                return(<IconHeader Icon={ResourceIcon} nav={navigation}/>);
              }
            }
          }
        }>
        <Stack.Screen name="Home" component={HomeScreen} options={{title: 'Resource Access Mapping Project'}} />
        <Stack.Screen name="Map" component={MapScreen} options={{title: 'Health Resources'}} />
        <Stack.Screen name="HomeGuide" component={HomeGuideScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreenHeader(){
  let [fontsLoaded] = useFonts({
    'Outfit': require('../../assets/fontFamilies/Outfit/static/Outfit-Light.ttf')
  });
  if(!fontsLoaded){
    return (<Text> Hello</Text>) 
  }
  else{
    return(
      <SafeAreaView style={styles.homeScreenHeaderContainer}>
        <Text style={styles.homeScreenHeaderText}> Resource Access Mapping Project </Text>
      </SafeAreaView>
    )
  }
}

function IconHeader(props){
  return(
  <SafeAreaView style={styles.iconHeaderContainer}>
    <View style={styles.iconHeaderLeftContainer}>
      <HeaderBackButton style={styles.backButton} onPress={()=> props.nav.goBack()}/>
    </View>
    <View style={styles.iconHeaderCenterContainer}>
        <View style={styles.centerIcon}>
          <props.Icon width="78%" height="78%"/>
        </View>
    </View>
    <View style={styles.iconHeaderRightContainer}/>
  </SafeAreaView>)
}

export default NavigationTool;