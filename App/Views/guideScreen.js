import React from 'react';
import { Text, View, FlatList, Image, TouchableOpacity, useWindowDimensions, Dimensions } from 'react-native';
import {getGuideScreenStyles} from "./styles.js"
import { Header } from "../Navigation/stack.js"

const styles = getGuideScreenStyles()

export default function guideScreen({route, navigation}) {

    const resource = route.params.resource
    navigation.setOptions({header: (route) => <Header HeaderIcon={resource.icon}/>})
    return (
        <View style={styles.container}>
            <View style={styles.iconAtTopOfScreen}>
                <resource.icon width="78%" height="78%"/>
            </View>
        </View> 
    );
}