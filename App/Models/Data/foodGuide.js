export const foodGuides ={
    prompts:
    [
        {
            "prompt": "What can I do if I am urgently in need of food?",
            "id": "4.0",
            "groupId": "food"
        },
        {
            "prompt": "What categories of food resources are available in the community?",
            "id": "4.1",
            "groupId": "food"
        },
        {
            "prompt": "What are groceries/food assistance programs?",
            "id": "4.2",
            "groupId": "food"
        },
        {
            "prompt": "What are food pantries?",
            "id": "4.3",
            "groupId": "food"
        },
        {
            "prompt": "What are hot meals?",
            "id":"4.4",
            "groupId": "food"
        }
    ],
    content: "null"
}


export const firstFoodSubGuide = 
    [
        {
            "prompt": "Am I eligible for a food program?",
            "id": "4.1.1"
        },
        {
            "prompt": "What is the Federal Poverty Level?",
            "id": "4.1.2"
        },
        {
            "prompt": "Where and how can I apply to a food program?",
            "id": "4.1.3"
        },
        {
            "prompt": "Can I apply for more than one food program?",
            "id": "4.1.4"
        },
        {
            "prompt": "What paperwork do I need to apply?",
            "id": "4.1.5"
        },
    ]

export const thirdFoodSubGuide = {
    prompts:
        [
            {
                "prompt": "What is the Commondity Supplemental Food Program",
                "id": "4.3.1" 
            },
        ],
    content: "Food pantries are centers that distribute packages of groceries  (i.e., fruits, vegetables, protein, dairy, grains) to eligible individuals and households in a specified area. A selected number of food pantries also deliver packages to those who are homebound."
}
export const thirdFoodSubSubGuide = {
    prompts:[
        {
            "prompt": "How can I apply to the Commodity Supplemental Food Program",
            "id": "4.3.1.1"
        },
    ],
    content: "The Commodity Supplemental Food Program (CSFP) delivers monthly food packages to low-income, elderly individuals (below 130 percent of the Federal Poverty Level and at least 60 years of age)."
}