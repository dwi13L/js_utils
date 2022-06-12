const fs = require("fs");

function readFromFile(path, key) {
  const rawData = fs.readFileSync(path);
  const data = JSON.parse(rawData);

  function flattenObject(obj) {
    const flattened = {};

    Object.keys(obj).forEach((key) => {
      const value = obj[key];

      if (
        typeof value === "object" &&
        value !== null &&
        !Array.isArray(value)
      ) {
        Object.assign(flattened, flattenObject(value));
      } else {
        flattened[key] = value;
      }
    });

    return flattened;
  }

  const flattenedObject = flattenObject(data);
  const value = flattenedObject.hasOwnProperty(key)
    ? flattenedObject[key]
    : null;

  return { flattenedObject, value };
}

module.exports = { readFromFile };

/**
  For reference

  const path = `./values.json`; //set path
  const key = `lat`; //set key for search

  const { flattenedObject, value } = readFromFile(path, key);

  console.log(`flattenedObject`, flattenedObject);
  console.log(`value for key ${key}`, value);
*/
