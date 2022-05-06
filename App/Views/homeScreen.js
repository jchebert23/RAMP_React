import React from 'react';
import { View, TouchableOpacity, Text, SafeAreaView} from 'react-native';
import {getResourceGroups}  from "../Controllers/homeScreenController.js"
import { getHomeScreenStyles } from "./styles/homeScreenStyles"
import { getResourceIcon } from '../Controllers/commonController.js';
import Map from './mapComponent.js';

const numColumns = 3
const styles = getHomeScreenStyles(numColumns)

function Item({ item, navigation}) {
    const ResourceIcon = getResourceIcon(item.id)
    return (
      <View style={{flex:1}}>
        <TouchableOpacity disabled={item.disabled} style={styles.icon} onPress={()=> navigation.push('HomeGuide',{id: item.id, groupId: item.groupId})} >
          <ResourceIcon width="78%" height="78%"/>
        </TouchableOpacity>
        <View style ={[styles.iconLabel,{backgroundColor: item.color}]}>
          <Text>{item.label}</Text> 
        </View>
      </View>
    );
}

export default function HomeScreen({navigation}) {
    const resourceGroups = getResourceGroups()
    //IMPORTANT: SAFEAREAVIEW only works in ios
    return (
        <View style={styles.container}>
          <View style={styles.mapContainer}>
            <Map markers={"all"}/>
          </View>
          <SafeAreaView style = {{justifyContent: "center"}}>
            <View style = {{flexDirection: "row"}}>
              <Item item={resourceGroups[0]} navigation={navigation}/>
              <Item item={resourceGroups[1]} navigation={navigation}/>
              <Item item={resourceGroups[2]} navigation={navigation}/>
            </View>
            <View style = {{flexDirection: "row"}}>
              <Item item={resourceGroups[3]} navigation={navigation}/>
              <Item item={resourceGroups[4]} navigation={navigation}/>
              <Item item={resourceGroups[5]} navigation={navigation}/>
            </View>
          </SafeAreaView>
        </View> 
    );
}
