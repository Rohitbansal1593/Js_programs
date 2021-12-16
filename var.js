//variables   --->var------const-------let<---
// var: global scope
var city="jaipur";
console.log(city);
city="copper";
console.log(city);
{
    console.log(city);
    city="jaipur"
}
console.log(city)

// const
const name1="rohit";    //global scope
// console.log(name1);
{
    console.log(name1)
}

//let

{
    let assign1="ok";
    console.log(assign1);
}
console.log(assign1);