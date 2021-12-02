import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import { getResourceGuideQuestions } from '../Controllers/guideController.js';
import {getGuideScreenStyles} from "./styles.js"

const styles = getGuideScreenStyles()

function Item({ item }) {
    return (
      <View style={styles.listItem}>
        <Image source={{uri:item.photo}}  style={{width:60, height:60,borderRadius:30}} />
        <View style={{alignItems:"center",flex:1}}>
          <Text style={{fontWeight:"bold"}}>{item.name}</Text>
          <Text>{item.position}</Text>
        </View>
        <TouchableOpacity style={{height:50,width:50, justifyContent:"center",alignItems:"center"}}>
          <Text style={{color:"green"}}>Call</Text>
        </TouchableOpacity>
      </View>
    );
}

export default function guideScreen({route, navigation}) {
    const resource = route.params.resource
    const resourceGuideQuestions = getResourceGuideQuestions(resource.id)
    return (
        <View style={styles.container}>
          <FlatList
            style={{flex:1}}
            data={resourceGuideQuestions}
            renderItem={({ item }) => <Item item={item}/>}
            keyExtractor={item => item.email}
          />
        </View>
      );
}