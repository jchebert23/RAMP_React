import { fetchResourceGroups } from "../Models/homeScreenModel.js"

export function getResourceGroups(){
    return fetchResourceGroups()
}