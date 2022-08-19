// Synchronous or blocking 
// -line by line execution 

// Asynchronous or non blocking
// -line by line execution npt guarenteed
// -callbacks will fire 

const fs  = require("fs");
let text = fs.readFile("rtk.txt","utf-8",(err,data)=>{
    console.log(data);
})
console.log("this is amessage");