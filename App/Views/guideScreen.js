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
        <Text style={itemStyles.listItemText}>{text}</Text>
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
  console.log(cells)
  return(
    <View style={{flex: 1, backgroundColor: "red"}}>
      <View style={{ flex: 1, backgroundColor: "darkorange",justifyContent:"center"}} >
        <Item item={cells[0]} navigation={navigation}/>
      </View>
      <View style={{ flex: 5, backgroundColor: "green"}}>
        <MapScreen/>
      </View>
    </View>
  )
}

export default function guideScreen({route, navigation}) {
    const groupId = route.params.groupId
    const resourceID = route.params.id
    const cells = getResourceGuide(resourceID)
    return (cells[0].cellType==3) ? <Map cells={cells} navigation={navigation}/> : <ListView cells={cells} groupId={groupId} navigation={navigation}/>
}

