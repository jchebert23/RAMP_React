import { Dimensions, StyleSheet } from "react-native";

export function getNavigationStyles(){
    const topIconWidth = Dimensions.get('window').width/5.75
    return StyleSheet.create({
        homeScreenHeaderContainer: {
          backgroundColor: '#F7F7F7',
          alignItems: 'center',
          justifyContent: 'center'
        },
        homeScreenHeaderText:{
          fontWeight: "500",
          fontSize: 26, 
          fontFamily: 'Outfit',
          textAlign: 'center',
          width: "80%"
        },
        iconHeaderContainer: {
          backgroundColor: '#F7F7F7',
          alignItems: 'center',
          justifyContent: 'flex-start',
          height: 120,
          flexDirection: "row",
        },
        iconHeaderCenterContainer:{
          flex:1,
          alignItems: 'center',
          justifyContent: 'center',
        },
        iconHeaderLeftContainer:{
          flex:1,
        },
        iconHeaderRightContainer:{
          flex:1
        },
        backButton:{
          paddingLeft: 10
        },
        centerIcon:{
          backgroundColor:"#FFF",
          width:topIconWidth,
          height:topIconWidth,
          borderRadius: topIconWidth/2,
          alignItems: 'center',
          justifyContent: 'center',
          //shadow
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: .3,
          shadowRadius: 5,  
          elevation: 5
        }
    })
  }