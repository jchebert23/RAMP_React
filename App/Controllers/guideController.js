import { fetchResourceGuides, fetchResourceSubGuides } from "../Models/guideModel";

export function getResourceGuide(guideID){
    if(guideID==="food")
    {
        return fetchResourceGuides(guideID)
    }
    else{
        return fetchResourceSubGuides(guideID)
    }
}