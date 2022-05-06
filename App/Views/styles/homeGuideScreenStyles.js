import { StyleSheet } from "react-native";

export function getHomeGuideScreenStyles(){
    return StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#F8F8F8',
      },
      headingContainer: {
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
      headingLabel: {
        flex:1,
        fontFamily: "Outfit",
        width: "90%",
        margin: 10,
        textAlign: "center",
        fontSize: 20
      }
    })
  }