import React from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import { getResourceGuideHeadings } from '../Controllers/guideController.js';
import Map from './mapComponent.js';
import {getHomeGuideScreenStyles} from "./styles/homeGuideScreenStyles.js"

const styles = getHomeGuideScreenStyles()

function Item({ item, navigation, groupId=null}) {
    const label = item.label
    return (
      <TouchableOpacity style = {styles.headingContainer} onPress={()=> navigation.push('GuideContent',{groupId:groupId, subHeadingTitle: item.label})}>
        <Text style = {styles.headingLabel}>{label}</Text>
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
        keyExtractor={item => item.label}
      />
    </View>
  );
}

export default function HomeGuideScreen({route, navigation}) {
    const groupId = route.params.groupId
    const resourceID = route.params.id
    const cells = getResourceGuideHeadings(resourceID)
    return (
        <View style = {{flex:1}}>
            <View style = {{flex:2, backgroundColor: '#F8F8F8'}}>
                <Map markers={"food"}/> 
            </View>
            <View style = {{flex:3}}>
                <ListView cells={cells} groupId={groupId} navigation={navigation}/>
            </View>
        </View>
        );
}

