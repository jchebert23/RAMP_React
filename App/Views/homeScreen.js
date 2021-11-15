import React from 'react';
import { View, FlatList, TouchableOpacity} from 'react-native';
import {getResourceGroups}  from "../Controllers/homeScreenController.js"
import {getHomeScreenStyles} from "./styles.js"
import { getResourceIcon } from '../Controllers/commonController.js';

const numColumns = 2
const styles = getHomeScreenStyles(2)

function Item({ item, navigation}) {
    const ResourceIcon = getResourceIcon(item.id)
    return (
      <TouchableOpacity style={styles.listItem} onPress={()=> navigation.navigate('Guide',{resource: item})} >
        <ResourceIcon width="78%" height="78%"/>
      </TouchableOpacity>
    );
}

export default function HomeScreen({navigation}) {
    const resourceGroups = getResourceGroups()

    return (
        <View style={styles.container}>
        <FlatList
            style={{flex:1,marginTop:40}}
            data={resourceGroups}
            numColumns={numColumns}
            renderItem={({ item }) => <Item item={item} navigation={navigation}/>}
            keyExtractor={item => item.id}

        />
        </View> 
    );
}
