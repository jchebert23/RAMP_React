import { fetchHealthLocations, fetchTransportationLocations, fetchFoodLocations, fetchEmploymentLocations, fetchEducationLocations, fetchHousingLocations } from "../Models/mapScreenModel";

function getFoodLocations(){
    return fetchFoodLocations()
}

function getAllLocations(){
    return fetchHealthLocations().concat(fetchTransportationLocations()).concat(fetchFoodLocations())
    .concat(fetchEmploymentLocations()).concat(fetchEducationLocations()).concat(fetchHousingLocations())
}

export function getLocations(markers){
    if(markers === "all"){
        return getAllLocations()
    }
    else{
        return getFoodLocations()
    }
}