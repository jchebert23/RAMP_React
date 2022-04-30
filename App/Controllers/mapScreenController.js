import { fetchHealthLocations, fetchTransportationLocations } from "../Models/mapScreenModel";

export function getHealthLocations(){
    return fetchHealthLocations()
}

export function getAllLocations(){
    return fetchHealthLocations().concat(fetchTransportationLocations())
}