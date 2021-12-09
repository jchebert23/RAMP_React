export const idToPrompt = {
    "food" : {
        prompt:null,
        content:null,
        children: ["4.0","4.1","4.2","4.3","4.4"]
    },
    "4.0":{
        prompt: "What can I do if I am urgently in need of food?",
        content: null,
        children: null
    },
    "4.1":{
        prompt:"What categories of food resources are available in the community?",
        content: null,
        children: null
    },
    "4.2":{
        prompt: "What are groceries/food assistance programs?",
        content: null,
        children: null
    },
    "4.3":{
        prompt: "What are food pantries?",
        content: "Food pantries are centers that distribute packages of groceries  (i.e., fruits, vegetables, protein, dairy, grains) to eligible individuals and households in a specified area. A selected number of food pantries also deliver packages to those who are homebound.",
        children: ["4.3.1"]
    },
    "4.4":{
        prompt: "What are hot meals?",
        content: null,
        children: null
    },
    "4.3.1":{
        prompt: "What is the Commondity Supplemental Food Program?",
        content:"The Commodity Supplemental Food Program (CSFP) delivers monthly food packages to low-income, elderly individuals (below 130 percent of the Federal Poverty Level and at least 60 years of age).",
        children: ["4.3.1.1"]
    },
    "4.3.1.1":{
        prompt: "How can I apply to the Commodity Supplemental Food Program",
        content: null,
        childre: null
    }
}

export const thirdFoodSubSubGuide = {
    prompts:[
        {
            "prompt": "How can I apply to the Commodity Supplemental Food Program",
            "id": "4.3.1.1"
        },
    ],
    content: "The Commodity Supplemental Food Program (CSFP) delivers monthly food packages to low-income, elderly individuals (below 130 percent of the Federal Poverty Level and at least 60 years of age).",
    guideLevel: 2
}