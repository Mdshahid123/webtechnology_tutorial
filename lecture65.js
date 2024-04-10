const fs=require("fs")
let text=fs.readFileSync("del.txt","utf-8")
 console.log("content of the file is")
 console.log(text)
 // edit a content of a existing file
 let newtext=text.replace('lern','replace')
 //creating a new file
 console.log("creating a new file")
 fs.writeFileSync("rohan.txt",newtext)

// asynchronus(non blocking and call back fire)
// -parallel -execution -of -code

let text2=fs.readFile("del.txt","utf-8",(err,data)=>{
    console.log("asycronus excution of code");
    console.log(err,data);

});

console.log("message");