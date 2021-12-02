import React from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import { getResourceGuide } from '../Controllers/guideController.js';
import {getGuideScreenStyles, getGuideScreenPromptContainerStyle} from "./styles.js"

const styles = getGuideScreenStyles()

function Item({ item, guideLevel, navigation }) {
    const listItemContainerStyle = getGuideScreenPromptContainerStyle(guideLevel).listItemContainer
    return (
      <TouchableOpacity style={listItemContainerStyle} onPress={()=> navigation.push('Guide',{resource: item})}>
        <View style={{alignItems:"center",flex:1}}>
          <Text style={styles.listItemQuestion}>{item.prompt}</Text>
        </View>
      </TouchableOpacity>
    );
}

export default function guideScreen({route, navigation}) {
    const resource = route.params.resource
    const resourceGuide = getResourceGuide(resource.id)
    const prompts = resourceGuide.prompts
    const guideLevel = resourceGuide.guideLevel
    return (
        <View style={styles.container}>
          <FlatList
            style={{flex:1}}
            data={prompts}
            renderItem={({ item }) => <Item item={item} guideLevel={guideLevel} navigation={navigation}/>}
            keyExtractor={item => item.id}
          />
        </View>
      );
}

