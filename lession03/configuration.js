var fs = require("fs");
console.log("Starting");
var contents = fs.readFileSync("./files/config.json");
console.log("Contents: " + contents);
