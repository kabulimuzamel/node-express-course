const fs = require("fs");

fs.writeFileSync("./temporary/fileA.txt", "Hey how you doing? I hope everything is okay. You gotta finish your work by today.");

fs.writeFileSync("./temporary/fileA.txt", "I will finish it by tonight", {flag: "a"});

fs.writeFileSync("./temporary/fileA.txt", "I almost finished it", { flag: "a" });

const writtenFile = fs.readFileSync("./temporary/fileA.txt").toString();

console.log(writtenFile)