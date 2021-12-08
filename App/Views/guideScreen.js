import React from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import { getResourceGuide } from '../Controllers/guideController.js';
import {getGuideScreenStyles, getGuideScreenItemStyles} from "./styles.js"

const styles = getGuideScreenStyles()

function Item({ item, guideLevel, navigation, itemType, groupId}) {
    const itemStyles = getGuideScreenItemStyles(guideLevel,itemType)
    const text = (itemType==2 ? item.content: item.prompt)
    console.log(text + "\n")
    const touchDisabled = (itemType==0)
    return (
      <TouchableOpacity style={itemStyles.listItemContainer} disable={touchDisabled} onPress={()=> navigation.push('Guide',{groupId:groupId , id: item.id, prompt: item.prompt})}>
        <View style={{alignItems:"center",flex:1}}>
          <Text style={itemStyles.listItemText}>{text}</Text>
        </View>
      </TouchableOpacity>
    );
}

export default function guideScreen({route, navigation}) {
    const groupId = route.params.groupId
    const resourceID = route.params.id
    const parentPrompt = route.params.prompt
    //controller call
    const resourceGuide = getResourceGuide(resourceID)
    const prompts = resourceGuide.prompts
    const guideLevel = resourceGuide.guideLevel
    console.log(resourceGuide)
    return (
        <View style={styles.container}>
          {parentPrompt == null ? null : 
            <View style={{flex:.33}} >
              <Item item={resourceGuide} guideLevel={guideLevel} navigation={navigation} itemType={1} groupId={groupId}/>
              <Item item={resourceGuide} guideLevel={guideLevel} navigation={navigation} itemType={2} groupId={groupId}/>
            </View>
          }
          <FlatList
            style={{flex:3}}
            data={prompts}
            renderItem={({ item }) => <Item item={item} guideLevel={guideLevel} navigation={navigation} itemType={0} groupId={groupId}/>}
            keyExtractor={item => item.id}
          />
        </View>
      );
}

