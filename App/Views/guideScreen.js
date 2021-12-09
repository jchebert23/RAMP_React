import React from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import { getResourceGuide } from '../Controllers/guideController.js';
import {getGuideScreenStyles, getGuideScreenItemStyles} from "./styles.js"

const styles = getGuideScreenStyles()

function Item({ item, navigation, groupId}) {
    const itemType = item.cellType
    const guideLevel =item.guideLevel
    const text = item.text
    const itemStyles = getGuideScreenItemStyles(guideLevel,itemType)
    const touchDisabled = (itemType==1 || itemType==2)
    return (
      <TouchableOpacity style={itemStyles.listItemContainer} disabled={touchDisabled} onPress={()=> navigation.push('Guide',{groupId:groupId , id: item.id})}>
        <View style={{alignItems:"center",flex:1}}>
          <Text style={itemStyles.listItemText}>{text}</Text>
        </View>
      </TouchableOpacity>
    );
}

export default function guideScreen({route, navigation}) {
    const groupId = route.params.groupId
    const resourceID = route.params.id
    //controller call
    console.log("About to do Controller call")
    const cells = getResourceGuide(resourceID)
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

