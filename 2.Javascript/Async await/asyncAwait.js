// const fs = require("fs");
// const filePath = '2.Javascript//Async await//a.txt'


// function hkiratReadFile(){
//     return new Promise(function(resolve){
//         fs.readFile(filePath,"utf-8",function(err,data){
//            resolve(data);
//     })
   
// })
// }

// function onDone(data){
//     console.log(data);
// }

// hkiratReadFile().then(onDone);

// console.log("hi");


// ! Promise

var d = new Promise(function(resolve){
    setTimeout(function(){
   resolve("foo");
    },2000);
})

function callBack(){
    console.log(d);
}

console.log(d);
d.then(callBack);