import { Dimensions, StyleSheet } from "react-native";


export function getHomeScreenStyles(numColumns){
    const windowWidth = Dimensions.get('window').width
    const tilePadding = 10
    const tileWidth = (windowWidth-(numColumns*2*tilePadding))/numColumns


    return StyleSheet.create({
        container: {
        flex: 1,
        backgroundColor: '#F7F7F7',
        marginTop:0,
        flexDirection:"column"
        },

        listItem:{
        margin:10,
        padding:tilePadding,
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
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height/2.33,
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

export function getGuideScreenStyles(){
  const topIconWidth = Dimensions.get('window').width/5
  return StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#F7F7F7',
        flexDirection: 'column'
      },
      iconAtTopOfScreen:{
        margin:10,
        padding:10,
        backgroundColor:"#FFF",
        flexDirection:"column",
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

export function getNavigationStyles(){
  const topIconWidth = Dimensions.get('window').width/5
  return StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#F7F7F7',
        flexDirection: 'column'
      },
      iconAtTopOfScreen:{
        margin:10,
        padding:10,
        backgroundColor:"#FFF",
        flexDirection:"column",
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