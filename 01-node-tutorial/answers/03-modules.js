const personalInformationObj = require("./04-names");
const greetPersonFun = require("./05-utils");
const flavorsObj = require("./06-alternative-flavor");

greetPersonFun(personalInformationObj.name);
const flavorValues = Object.values(flavorsObj);
flavorValues.forEach(flavor => {
    console.log(flavor)
})
