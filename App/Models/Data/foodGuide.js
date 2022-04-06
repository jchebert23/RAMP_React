export const idToPrompt = {
    "food" : {
        prompt:null,
        content:null,
        children: ["4.0","4.1","4.2","4.3","4.4"],
        mapView: false
    },
    "4.0":{
        prompt: "What can I do if I am urgently in need of food?",
        content: null,
        children: null,
        mapView: false
    },
    "4.1":{
        prompt:"What categories of food resources are available in the community?",
        content: null,
        children: null,
        mapView: false
    },
    "4.2":{
        prompt: "What are groceries/food assistance programs?",
        content: "Groceries/food assistance programs provide eligible individuals and households monthly food stamps (i.e., debit cards, vouchers) that help them purchase various foods at participating stores. Each program has its own set of eligibility criteria. Please click on the page for each program (e.g., SNAP, WIC) to view more information about the application.",
        children: null,
        mapView: false
    },
    "4.3":{
        prompt: "What are food pantries?",
        content: "Food pantries are centers that distribute packages of groceries  (i.e., fruits, vegetables, protein, dairy, grains) to eligible individuals and households in a specified area. A selected number of food pantries also deliver packages to those who are homebound.",
        children: ["4.3.1"],
        mapView: false
    },
    "4.4":{
        prompt: "What are hot meals?",
        content: "Hot meals are freshly cooked meals that are served to eligible individuals at selected sites in the community. There are four categories of hot meal services available: soup kitchens, senior congregate meals, holiday meals, and school lunches.",
        children: ["4.4.1","4.4.2","4.4.4"],
        mapView: false
    },
    "4.3.1":{
        prompt: "What is the Commondity Supplemental Food Program?",
        content:"The Commodity Supplemental Food Program (CSFP) delivers monthly food packages to low-income, elderly individuals (below 130 percent of the Federal Poverty Level and at least 60 years of age).",
        children: ["4.3.1.1"],
        mapView: false
    },
    "4.3.1.1":{
        prompt: "How can I apply to the Commodity Supplemental Food Program",
        content: "Those who are interested in this program should reach out to the Adult Services Division at USDA Connecticut using the following contact information:\nJane Eagle--Public Assistance Consultant\nPhone: (860) 424-5429\nEmail: Jane.Engle@ct.gov",
        children: null,
        mapView: false
    },
    "4.4.1":{
        prompt:"What are soup kitchens?",
        content:"Soup kitchens are places where those in need of food are seated and served freshly cooked meals for free. Most, if not all, soup kitchens do not require individuals to fill out any application or registration.",
        children:["4.4.1.1","4.4.1.2"],
        mapView: false
    },
    "4.4.2":{
        prompt:"What are home-delivered meals?",
        content:"Home-delivered meals are freshly cooked meals that are delivered directly to the homes of eligible individuals.",
        children:null,
        mapView: false
    },
    "4.4.4":{
        prompt:"What are Thanksgiving and Christmas meals?",
        content:"Some nonprofit organizational sites (e.g., Salvation Army centers, ministries) serve freshly cooked meals to all individuals on Thanksgiving and Christmas holidays.",
        children:null,
        mapView: false
    },
    "4.4.1.1":{
        prompt: "When are soup kitchens open?",
        content: "Soup kitchens are typically open during lunch or dinner hours on weekdays, but can vary in their hours of operation.",
        children: null,
        mapView: false
    },
    "4.4.1.2":{
        prompt: "How can I find soup kitchens near me?",
        content: null,
        children: null,
        mapView: true
    }
}
