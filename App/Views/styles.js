import { Dimensions, StyleSheet } from "react-native";


export function getHomeScreenStyles(numColumns){
    const windowWidth = Dimensions.get('window').width
    const tilePadding = 10
    const tileWidth = (windowWidth-(numColumns*2*tilePadding))/numColumns


    return StyleSheet.create({
        container: {
        flex: 1,
        backgroundColor: '#F7F7F7',
        marginTop:60,
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