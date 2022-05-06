import { Dimensions, StyleSheet } from "react-native";

export function getHomeScreenStyles(numColumns){
    const windowWidth = Dimensions.get('window').width
    const margin = 10
    const tileWidth = (windowWidth-(numColumns*2*margin))/numColumns


    return StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#F7F7F7',
          marginTop:0,
          flexDirection:"column"
        },

        listItem:{
          margin:margin,
          backgroundColor:"#FFF",
          flexDirection:"column",
          width:tileWidth,
          height:tileWidth,
          borderRadius: tileWidth/2,
          alignItems: 'center',
          justifyContent: 'center',
          //shadow
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: .3,
          shadowRadius: 5,  
          elevation: 5
        }
    });
}