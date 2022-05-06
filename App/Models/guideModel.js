import { idToPrompt } from "./Data/foodGuide";
import { foodGuideV2 } from "./Data/foodGuideV2";

export function fetchResourceGuide(ids){
    var guide = []
    if(ids!=null)
    {
        ids.forEach(id => guide.push(idToPrompt[id]))
    }
    return guide
}

export function fetchResourceGuideHeadings(id){
    var headings = [foodGuideV2["4.1"],foodGuideV2["4.2"],foodGuideV2["4.3"],foodGuideV2["4.4"]]
    return headings
}