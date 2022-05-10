import { fetchResourceGuide, fetchResourceGuideHeadings} from "../Models/guideModel";

export function getResourceGuide(guideID){

    const guide =  fetchResourceGuide([guideID])[0]
    var cells = []
    if(guide.prompt!=null){
        cells.push({
            text: guide.prompt,
            cellType: (guide.mapView ? 3 : 1),
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

export function getResourceGuideHeadings(guideId){
    const resourceGuideHeadings = fetchResourceGuideHeadings(guideId)
    var cells = []
    resourceGuideHeadings.forEach((heading) =>
        cells.push({
            text: heading.label,
            children: heading.children
        })
    )
    return resourceGuideHeadings
}

export function getResourceGuideSubHeadings(){
    return [{content: "hello"}, {content: "hello2"}, {content: "hello3"}, {content: "hello4"}]
}

function idToGuideLevel(id){
    return id.split('.').length - 1
}