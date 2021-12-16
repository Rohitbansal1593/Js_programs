// console.log("async_await");
// async function identity(name){
//     console.log("before the first await");
//     let url="js/rohit.txt";
//     let response = await fetch(url);
//     console.log("After the first await");
//     let result=await response.text();
//     console.log("after the second await");
//     return result+" "+name;
// }

// console.log("before executing function");
// let a=identity("rohit");
// console.log("After executing function");
// console.log(a.then(data=>console.log(data)));
// console.log("last line og the code");



//code 1

// async function scrap(url){
//     let response = await fetch(url);
//     let result=await response.text();
//     return result;
// }
// url="index.html";
// let a=scrap(url);
// console.log(a.then(data=>console.log(data.match(/(?<=\<title>).*(?=\<\/title>)/))));



//code 2

const jsdom = require("jsdom");
const { JSDOM } = jsdom;
(async () => {
    const response = await fetch('index.html');
    const text = await response.text();
    const dom = await new JSDOM(text);
    console.log(dom.window.document.querySelector("h1").textContent);
  })();