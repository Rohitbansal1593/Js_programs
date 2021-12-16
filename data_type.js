// datatypes in js
// 1. primitive 
//a. string
let city="kanpur";
console.log("my city is "+ city)
console.log("type of city is "+ (typeof city));

//b.number
let x=45;
console.log((typeof x));

//c.null
let varnull=null;
console.log((typeof varnull));       // return garbage collection

//d.bool
let bool_var=true;
console.log((typeof bool_var));

//undefined

let u_var;
console.log((typeof u_var));

//2.reference datatypes


//a. array

let arr=[1,2,3,4,5,6,"rohit"]
console.log("type of array is ",(typeof arr));

//b. object literals(dict)
let ol={
    name1:'rohit',
    city:"kanpur"
};
console.log(ol)
console.log("type of object literals is ",(typeof ol));

function cityName() {
    
}
console.log("type of function is ",(typeof cityName));

let date=new Date()
console.log("type of date is ",(typeof date));
