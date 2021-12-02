import { fetchResourceGuides, fetchResourceSubGuides } from "../Models/guideModel";

export function getResourceGuideQuestions(guideID){
    if(guideID==="food")
    {
        return fetchResourceGuides(guideID)
    }
    else{
        return fetchResourceSubGuides(guideID)
    }
}