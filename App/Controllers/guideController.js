import { fetchResourceGuideQuestions } from "../Models/guideModel";

export function getResourceGuideQuestions(guideID){
    return fetchResourceGuideQuestions(guideID)
}