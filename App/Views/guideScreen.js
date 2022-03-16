import React from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import { getResourceGuide } from '../Controllers/guideController.js';
import {getGuideScreenStyles, getGuideScreenItemStyles} from "./styles.js"
import MapScreen from './mapScreen.js';
import MapView from 'react-native-maps';
import {getMapScreenStyles} from "./styles.js"

const styles = getGuideScreenStyles()

function Item({ item, navigation, groupId=null}) {
    const itemType = item.cellType
    const guideLevel =item.guideLevel
    const text = item.text
    const itemStyles = getGuideScreenItemStyles(guideLevel,itemType)
    const touchDisabled = (itemType != 0)
    return (
      <TouchableOpacity style={itemStyles.listItemContainer} disabled={touchDisabled} onPress={()=> navigation.push('Guide',{groupId:groupId , id: item.id})}>
        <View style={{alignItems:"center",justifyContent:"center",flex:1}}>
          <Text style={itemStyles.listItemText}>{text}</Text>
        </View>
      </TouchableOpacity>
    );
}

function ListView({cells, groupId, navigation}){
  return (
    <View style={styles.container}>
      <FlatList
        style={{flex:1}}
        data={cells}
        renderItem={({ item }) => <Item item={item} navigation={navigation} groupId={groupId}/>}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

function Map({cells, navigation}){
  const mapStyles = getMapScreenStyles()
  console.log("IN MA")
  console.log(cells)
  const itemType = cells[0].cellType
  const guideLevel = cells[0].guideLevel
  const text = cells[0].text
  const itemStyles = getGuideScreenItemStyles(guideLevel,itemType)
  return(
    <View style={{flex: 1, backgroundColor: "red"}}>
      <View style={{ flex: 1, backgroundColor: "darkorange",justifyContent:"center"}} >
        <View style={{backgroundColor: "green", margin: 10, alignItems:"center", padding: 10}}>
          <Text styles={itemStyles.listItemText}>{text}</Text>
        </View>
      </View>
      <View style={{ flex: 2, backgroundColor: "green"}}/>
      <View style={{ flex: 3, backgroundColor: "blue" }} />
    </View>
  )
}

export default function guideScreen({route, navigation}) {
    const groupId = route.params.groupId
    const resourceID = route.params.id
    const cells = getResourceGuide(resourceID)
    return (cells[0].cellType==3) ? <Map cells={cells} navigation={navigation}/> : <ListView cells={cells} groupId={groupId} navigation={navigation}/>
}

