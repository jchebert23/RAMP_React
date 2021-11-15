import React from 'react';
import { Text, View, FlatList, Image, TouchableOpacity, useWindowDimensions, Dimensions } from 'react-native';
import {getGuideScreenStyles} from "./styles.js"
import { NavigationHeader } from "./navBarHeader.js"
import { getResourceIcon } from '../Controllers/commonController.js';

const styles = getGuideScreenStyles()

export default function guideScreen({route, navigation}) {
    const resource = route.params.resource
    return (
        <View style={styles.container}>
            <Text> Hello World</Text>
        </View> 
    );
}