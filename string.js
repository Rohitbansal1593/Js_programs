console.log("string.js")
let name1="Rohit";
console.log(name1.concat(" is great"))
console.log(name1.length)
console.log(name1.toUpperCase());
console.log(name1.toLowerCase());
console.log(name1[2]);
console.log(name1.indexOf("kj"));
name1="rrr it";
console.log(name1.lastIndexOf("r"));
console.log(name1.endsWith("it"));
console.log(name1.includes("rrr"));
console.log(name1.substring(0,5))
console.log(name1.slice(-4));
arr3=name1.split(" ");
console.log(arr3)
name1="rohit is rohit";
console.log(name1.replace("rohit","mohit"));
name1="rohit";
let college="poornima";
let myvar=`${name1} hate ${college}`;
document.body.innerHtml=myvar;
console.log(myvar)
