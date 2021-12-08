import React from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import { getResourceGuide } from '../Controllers/guideController.js';
import {getGuideScreenStyles, getGuideScreenPromptContainerStyle} from "./styles.js"

const styles = getGuideScreenStyles()

function Item({ item, guideLevel, navigation, questionOrContent, groupId}) {
    const listItemContainerStyle = getGuideScreenPromptContainerStyle(guideLevel, questionOrContent).listItemContainer
    const text = (questionOrContent ? item.prompt: item.content)
    return (
      <TouchableOpacity style={listItemContainerStyle} disable={questionOrContent} onPress={()=> navigation.push('Guide',{groupId:item.groupId , id: item.id, prompt: item.prompt})}>
        <View style={{alignItems:"center",flex:1}}>
          <Text style={styles.guidePrompt}>{text}</Text>
        </View>
      </TouchableOpacity>
    );
}

export default function guideScreen({route, navigation}) {
    const groupId = route.params.groupId
    const resourceID = route.params.id
    const parentPrompt = route.params.prompt
    const resourceGuide = getResourceGuide(resourceID)
    const content = resourceGuide.content
    const prompts = resourceGuide.prompts
    const guideLevel = resourceGuide.guideLevel
    return (
        <View style={styles.container}>
          {content == null ? null : <Item item={resourceGuide} guideLevel={guideLevel} navigation={navigation} questionOrContent={false} groupId={groupId}/>}
          <FlatList
            style={{flex:1}}
            data={prompts}
            renderItem={({ item }) => <Item item={item} guideLevel={guideLevel} navigation={navigation} questionOrContent={true} groupId={groupId}/>}
            keyExtractor={item => item.id}
          />
        </View>
      );
}

