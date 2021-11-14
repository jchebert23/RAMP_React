import React from 'react';
import { Text, View, FlatList, Image, TouchableOpacity, useWindowDimensions, Dimensions } from 'react-native';
import { getNavigationStyles } from "../Views/styles";

const navigationStyles = getNavigationStyles()

export function NavigationHeader(props){
    return (
      <View style={navigationStyles.headerContainer}>
        <View style={navigationStyles.iconAtTopOfScreen}>
            <props.HeaderIcon width="78%" height="78%"/>
        </View>
      </View>
    );
  }