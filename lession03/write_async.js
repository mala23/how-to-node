var fs = require("fs");
console.log("Starting");
fs.writeFile("./files/write_async.txt", "Hello world! Synchronous!", function(error) {
  console.log("Written file");
});
console.log("Finished!");
