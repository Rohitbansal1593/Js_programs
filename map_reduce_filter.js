//map
//use to transform each element of an array
let arr=[1,2,3,4,5];

// let output=arr.map(element => element*3);
// console.log(output);

//filter:-filter the element of array over some condition
// function isEven(element) {
//     return element%2==0;
    
// }
// let output=arr.filter(isEven);
// console.log(output);


// reduce:-return a single value after iterating the whole array
function maximum(acc,cur) {
    if (cur>acc){
        return cur;
    }
    else{
        return acc;
    }
    
}
let output=arr.reduce(maximum,0);
console.log(output);

