import React from 'react';
import { View, FlatList, TouchableOpacity, Text, SafeAreaView} from 'react-native';
import {getResourceGroups}  from "../Controllers/homeScreenController.js"
import {getHomeScreenStyles} from "./styles.js"
import { getResourceIcon } from '../Controllers/commonController.js';
import MapScreen from './mapScreen.js';

const numColumns = 3
const styles = getHomeScreenStyles(numColumns)

function Item({ item, navigation}) {
    const ResourceIcon = getResourceIcon(item.id)
    return (
      <View style={{flex:1}}>
        <TouchableOpacity disabled={item.disabled} style={styles.listItem} onPress={()=> navigation.push('HomeGuide',{id: item.id, groupId: item.groupId})} >
          <ResourceIcon width="78%" height="78%"/>
        </TouchableOpacity>
        <View style={{marginHorizontal: 5, alignItems: "center", borderColor: "grey", borderWidth: ".5",
        backgroundColor:item.color, shadowColor: '#000',
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

export default function HomeScreen({navigation}) {
    const resourceGroups = getResourceGroups()
    //IMPORTANT: SAFEAREAVIEW only works in ios
    return (
        <View style={styles.container}>
          <View style={{flex:1, marginTop:20}}>
            <MapScreen markers={"all"}/>
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
