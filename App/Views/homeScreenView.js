import React from 'react';
import { Text, View, FlatList, Image, TouchableOpacity, useWindowDimensions, Dimensions } from 'react-native';
import {getResourceGroups}  from "../Controllers/homeScreenController.js"
import {getHomeScreenStyles} from "./styles.js"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const numColumns = 2
const styles = getHomeScreenStyles(2)

function Item({ item, navigation }) {
    return (
      <TouchableOpacity style={styles.listItem} onPress={()=> navigation.navigate('Map')} >
        <item.icon width="78%" height="78%"/>
      </TouchableOpacity>
    );
}

export default function HomeView({navigation}) {
    const resourceGroups = getResourceGroups()

    return (
        <View style={styles.container}>
        <FlatList
            style={{flex:1}}
            data={resourceGroups}
            numColumns={numColumns}
            renderItem={({ item }) => <Item item={item} navigation={navigation}/>}
            keyExtractor={item => item.id}

        />
        </View> 
    );
}
