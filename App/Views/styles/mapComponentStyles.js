import { StyleSheet } from "react-native";

export function getMapComponentStyles(){
    return StyleSheet.create({
        container: {
          backgroundColor: '#F7F7F7',
          flexDirection: 'row',
          paddingVertical: 20,
          paddingHorizontal: 10,
          flex: 2
        },
        map: {
          flex:4,
        },
        listItem:{
          flex:1,
          alignSelf:"center",
          flexDirection: "row"
        }
      });
}