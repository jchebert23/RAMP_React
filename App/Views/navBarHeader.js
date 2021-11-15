import React from 'react';
import { Text, View, FlatList, Image, TouchableOpacity, useWindowDimensions, Dimensions } from 'react-native';
import { getResourceIcon } from '../Controllers/commonController';
import { getNavigationStyles } from "./styles";

export class NavBarHeader extends React.Component{

  static navigationStyles = getNavigationStyles()

  constructor(){
    super();
    this.state = {iconID: null}
  }

  render(){
    if(this.stateiconID===null)
    {
      return (
        <Text> Hello World</Text>
      );
    }
    else{
      const HeaderIcon = getResourceIcon(this.state.iconID)
      return (
        <View style={navigationStyles.headerContainer}>
          <View style={navigationStyles.iconAtTopOfScreen}>
              <HeaderIcon width="78%" height="78%"/>
          </View>
        </View>
      );
    }
  }
}
