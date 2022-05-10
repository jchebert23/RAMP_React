import React, { useState } from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

//import for the collapsible/Expandable view
import Collapsible from 'react-native-collapsible';

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


const GuideContentScreen = ({route, navigation}) => { 
  const subHeadGroup = route.params.subHeadingTitle
  const cells = [{content: "hello"}, {content: "hello2"}, {content: "hello3"}, {content: "hello4"}]
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

export default GuideContentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  header: {
    margin:10,
    padding:10,
    backgroundColor:"#FFF",
    width:"85%",
    alignSelf:"center",
    borderRadius:5,
    borderWidth:2,
    justifyContent: "center",
    alignItems: "center"
  },
  headerText: {
    flex:1,
    fontFamily: "Outfit",
    width: "90%",
    margin: 10,
    textAlign: "center",
    fontSize: 20
  },
  content: {
    padding: 20,
    backgroundColor: '#F8F8F8',
  },
});
