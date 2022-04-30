import { fetchHealthLocations, fetchTransportationLocations, fetchFoodLocations, fetchEmploymentLocations, fetchEducationLocations, fetchHousingLocations } from "../Models/mapScreenModel";

export function getHealthLocations(){
    return fetchHealthLocations()
}

export function getAllLocations(){
    return fetchHealthLocations().concat(fetchTransportationLocations()).concat(fetchFoodLocations())
    .concat(fetchEmploymentLocations()).concat(fetchEducationLocations()).concat(fetchHousingLocations())
}