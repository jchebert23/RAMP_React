import React, { useState } from 'react';
import { getGuideContentScreenStyles } from './styles/guideContentScreenStyles';
import { getResourceGuideSubHeadings } from '../Controllers/guideController'; 

// import all the components we are going to use
import {SafeAreaView, FlatList, Text, View,TouchableOpacity} from 'react-native';

//import for the collapsible/Expandable view
import Collapsible from 'react-native-collapsible';

const styles = getGuideContentScreenStyles()

function Item({item, index, subHeadGroup}){
  const [collapsed, setCollapsed] = useState(true);

  const toggleExpanded = () => {
    //Toggling the state of single Collapsible
    setCollapsed(!collapsed);
  };

  return (
    <View>
          <TouchableOpacity onPress={toggleExpanded}>
            <View style={styles.header}>
              <Text style={styles.headerText}>{subHeadGroup} Subheading {index+1}</Text>
            </View>
          </TouchableOpacity>
          <Collapsible collapsed={collapsed} align="center">
            <View style={styles.content}>
              <Text style={{ textAlign: 'center' }}>
                {subHeadGroup} Subheading {index+1} content.
                Random Words. Random Words. Random Words. Random Words. Random Words. 
                Random Words. Random Words. Random Words. Random Words. Random Words. 
                Random Words. Random Words. Random Words. Random Words. Random Words. 
              </Text>
            </View>
          </Collapsible>
    </View>
  );
}

export default function GuideContentScreen({route, navigation}){ 
  const subHeadGroup = route.params.subHeadingTitle
  const cells = getResourceGuideSubHeadings()
  return (
  <SafeAreaView style={{ flex: 1 }}>
    <View style={styles.container}>
      <FlatList
          style={{flex:1}}
          data={cells}
          renderItem={({ item, index }) => <Item item={item} index={index} subHeadGroup={subHeadGroup}/>}
          keyExtractor={item => item.content}
        />
    </View>
  </SafeAreaView>);
};
