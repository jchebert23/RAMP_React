import { fetchResourceGuides, fetchResourceSubGuides } from "../Models/guideModel";

export function getResourceGuide(guideID){
    var guide = null
    if(guideID==="food")
    {
        guide =  fetchResourceGuides(guideID)
    }
    else{
        guide = fetchResourceSubGuides(guideID)
    }
    const prompts = guide.prompts
    var cells = []
    if(guide.prompt!=null){
        cells.push({
            text: guide.prompt,
            cellType:1,
            id: guideID,
            guideLevel: idToGuideLevel(guideID)
        })
    }
    if(guide.content!=null){
        cells.push({
            text: guide.content,
            cellType:2,
            id: guideID + "_Content",
            guideLevel: idToGuideLevel(guideID)
        })
    }
    prompts.forEach(prompt => 
        cells.push({
            text: prompt.prompt,
            cellType:0,
            id: prompt.id,
            guideLevel: idToGuideLevel(prompt.id)
        })
    )
    return cells
}

function idToGuideLevel(id){
    return id.split('.').length - 1
}