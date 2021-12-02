import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import { getResourceGuide } from '../Controllers/guideController.js';
import {getGuideScreenStyles} from "./styles.js"

const styles = getGuideScreenStyles()

function Item({ item, navigation }) {
    return (
      <TouchableOpacity style={styles.listItemContainer} onPress={()=> navigation.push('Guide',{resource: item})}>
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
    return (
        <View style={styles.container}>
          <FlatList
            style={{flex:1}}
            data={prompts}
            renderItem={({ item }) => <Item item={item} navigation={navigation}/>}
            keyExtractor={item => item.id}
          />
        </View>
      );
}