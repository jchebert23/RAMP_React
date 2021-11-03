import React from 'react';
import { Text, View, FlatList, Image, TouchableOpacity, useWindowDimensions, Dimensions } from 'react-native';
import {getResourceGroups}  from "../Controllers/homeScreenController.js"
import {getHomeScreenStyles} from "./styles.js"

const numColumns = 2
const styles = getHomeScreenStyles(2)

function Item({ item }) {
    return (
      <View style={styles.listItem}>
        <item.icon width="78%" height="78%"/>
      </View>
    );
}

export default function HomeView() {
    const resourceGroups = getResourceGroups()

    return (
        <View style={styles.container}>
        <FlatList
            style={{flex:1}}
            data={resourceGroups}
            numColumns={numColumns}
            renderItem={({ item }) => <Item item={item}/>}
            keyExtractor={item => item.id}
        />
        </View> 
    );
}
