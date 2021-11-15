import React from 'react';
import { Text, View} from 'react-native';
import {getGuideScreenStyles} from "./styles.js"

const styles = getGuideScreenStyles()

export default function guideScreen({route, navigation}) {
    const resource = route.params.resource
    return (
        <View style={styles.container}>
            <Text> Hello World</Text>
        </View> 
    );
}