import { Dimensions, StyleSheet } from "react-native";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";


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

export function getMapScreenStyles(){
    return StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#F7F7F7',
          flexDirection: 'column'
        },
        map: {
          ...StyleSheet.absoluteFillObject
          //width: Dimensions.get('window').width,
          //height: Dimensions.get('window').height/2.33,
        },
        listItem:{
          margin:10,
          padding:10,
          backgroundColor:"#FFF",
          width:"80%",
          flex:1,
          alignSelf:"center",
          flexDirection:"row",
          borderRadius:5
        }
      });
}

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

export function getGuideScreenStyles(){
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F8F8F8',
    }
  });
}

export function getGuideScreenItemStyles(guideLevel,itemType){
  const borderColor = getBorderColorByGuideLevel(guideLevel)
  const containerWidth =  ((itemType==1 || itemType==2) ? "95%": "80%")
  const textAlign = (itemType == 2 ? null:"center")
  const fontSize = (itemType == 2 ? 14: 20)

  return StyleSheet.create({
    listItemContainer:{
      margin:10,
      padding:10,
      backgroundColor:"#FFF",
      width:containerWidth,
      flex: 1,
      alignSelf:"center",
      borderRadius:5,
      borderWidth:3,
      borderColor: borderColor
    },
    listItemText:{
      fontFamily: "Outfit",
      width: "80%",
      textAlign: textAlign,
      fontSize: fontSize
    }
  })
}

function getBorderColorByGuideLevel(guideLevel){
  switch(guideLevel){
      case 1:
          return "black";
      case 2:
          return "gainsboro";
      case 3:
          return "ivory";
  }
}