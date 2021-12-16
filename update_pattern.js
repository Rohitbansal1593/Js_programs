async function getData(url){
    let response = await fetch(url);
    let result=await response.text();
    console.log(result);
}
let url="js/data1.csv";
getData(url);
// console.log(a.then(data=>console.log(data)));








// const patterns=[];
// function pattern(name,surname,domain) {
//     patterns.push(name+"@"+domain);
//     patterns.push(name+"."+surname+"@"+domain);
//     patterns.push(name[0]+surname+"@"+domain);
//     patterns.push(name[0]+"."+surname+"@"+domain);
//     patterns.push(name+"."+surname[0]+"@"+domain);
//     patterns.push(surname[0]+name+"@"+domain);
// return patterns;   
// }
// let c_name="Rohit";
// let surname="Bansal";
// domain="dianapps.com"
// domain=domain.split(" ");
// console.log(pattern(c_name.toLowerCase(),surname.toLowerCase(),domain[0]));