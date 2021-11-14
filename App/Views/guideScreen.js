import React from 'react';
import { Text, View, FlatList, Image, TouchableOpacity, useWindowDimensions, Dimensions } from 'react-native';
import {getGuideScreenStyles} from "./styles.js"
import { NavigationHeader } from "./common.js"
import { getResourceIcon } from '../Controllers/commonController.js';

const styles = getGuideScreenStyles()

export default function guideScreen({route, navigation}) {

    const resource = route.params.resource
    navigation.setOptions({header: () => <NavigationHeader HeaderIcon={getResourceIcon(resource.routeID)}/>})
    return (
        <View style={styles.container}>
            <Text> Hello World</Text>
        </View> 
    );
}