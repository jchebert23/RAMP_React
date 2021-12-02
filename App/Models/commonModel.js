import MySVGs from "../../assets/icons";


const idToResourceSVG = {
    "transportation": MySVGs.Transportation,
    "health": MySVGs.Health,
    "food": MySVGs.Food,
    "employment": MySVGs.Employment,
    "education": MySVGs.Education,
    "housing": MySVGs.Housing
}

export function fetchResourceIcon(name){
    return idToResourceSVG[name]
}