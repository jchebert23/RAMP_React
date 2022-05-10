import { StyleSheet } from "react-native";

export function getGuideContentScreenStyles(){
    return StyleSheet.create({
            collapsibleContent: {
                padding: 6,
                backgroundColor: '#eeeeee'
            },
            collapsibleHeader: {
                backgroundColor: '#dddddd',
                padding: 6,
                cursor: pointer
            }
        })
}