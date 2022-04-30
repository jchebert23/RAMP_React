import React from 'react';
import { View, FlatList, TouchableOpacity} from 'react-native';
import {getResourceGroups}  from "../Controllers/homeScreenController.js"
import {getHomeScreenStyles} from "./styles.js"
import { getResourceIcon } from '../Controllers/commonController.js';
import MapScreen from './mapScreen.js';

const numColumns = 3
const styles = getHomeScreenStyles(numColumns)

function Item({ item, navigation}) {
    const ResourceIcon = getResourceIcon(item.id)
    return (
      <TouchableOpacity disabled={item.disabled} style={styles.listItem} onPress={()=> navigation.push('Guide',{id: item.id, groupId: item.groupId})} >
        <ResourceIcon width="78%" height="78%"/>
      </TouchableOpacity>
    );
}

export default function HomeScreen({navigation}) {
    const resourceGroups = getResourceGroups()

    return (
        <View style={styles.container}>
          <View style={{flex:2}}>
            <MapScreen/>
          </View>
          <View style={{flex:3}}>
            <FlatList
                style={{flex:1}}
                data={resourceGroups}
                numColumns={numColumns}
                renderItem={({ item }) => <Item item={item} navigation={navigation}/>}
                keyExtractor={item => item.id}
            />
          </View>
        </View> 
    );
}
