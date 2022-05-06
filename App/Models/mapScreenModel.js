import healthLocations from "./Data/healthLocations";
import transportationLocations from "./Data/transportationLocations";
import foodLocations from "./Data/foodLocations";
import employmentLocations from "./Data/employmentLocations";
import educationLocations from "./Data/educationLocations";
import housingLocations from "./Data/housingLocations"


export function fetchTransportationLocations(){
    return transportationLocations
}

export function fetchHealthLocations(){
    return healthLocations
}

export function fetchFoodLocations(){
    return foodLocations
}

export function fetchEmploymentLocations(){
    return employmentLocations
}

export function fetchEducationLocations(){
    return educationLocations
}

export function fetchHousingLocations(){
    return housingLocations
}