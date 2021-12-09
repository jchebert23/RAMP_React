import { idToPrompt } from "./Data/foodGuide";

export function fetchResourceGuide(ids){
    var guide = []
    if(ids!=null)
    {
        ids.forEach(id => guide.push(idToPrompt[id]))
    }
    return guide
}