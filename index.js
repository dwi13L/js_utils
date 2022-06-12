const { readFromFile } = require("./readConfig.js");
const { writeToFile } = require("./writeConfig.js");

const result = readFromFile("./values.json", "lat");

const { flattenedObject, value } = result;

console.log(flattenedObject);
console.log(value);

writeToFile("./anotherFile.json", flattenedObject);
