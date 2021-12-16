console.log("loop.js")
let i=0;
// do{
//     console.log(i);
//     i++;
// }while(i<=7)
arr=[1,2,3,4];
arr.forEach(function(element,index,array) {
    console.log(element,index,array)
    
})
obj={
    name:"rohit",
    city:"kanpur"
};
for(let key in obj)
{
    console.log(`${key} : ${obj[key]}`);
}