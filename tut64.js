const fs = require("fs");
let text = fs.readFileSync("rtk.txt","utf-8");
text = text.replace("browser", "Rohan");
console.log("The content of thre file is");
console.log(text);
console.log("Creating a new file...");
fs.writeFileSync("rohan.txt",text); 