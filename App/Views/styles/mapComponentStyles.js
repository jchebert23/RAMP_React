import { StyleSheet } from "react-native";

export function getMapComponentStyles(){
    return StyleSheet.create({
        map: {
          flex:1,
          borderColor: "black", 
          borderWidth: 2, 
          borderRadius: 5,
          margin: 10
        }
      });
}