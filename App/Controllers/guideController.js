import { fetchResourceGuide} from "../Models/guideModel";

export function getResourceGuide(guideID){

    const guide =  fetchResourceGuide([guideID])[0]
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

    const subPrompts = fetchResourceGuide(guide.children)
    subPrompts.forEach((prompt,i) => 
        cells.push({
            text: prompt.prompt,
            cellType:0,
            id: guide.children[i],
            guideLevel: idToGuideLevel(guide.children[i])
        })
    )
    return cells
}

function idToGuideLevel(id){
    return id.split('.').length - 1
}