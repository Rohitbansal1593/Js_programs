console.log("High order function")


// High order function
// function which takes another function as an argument or return a function.
let radius=[1,5,7,2];
function calculate(radius,logic){
    let output=[];
    for(let i=0;i<radius.length;i++){
        output.push(logic(radius[i]));
    }
    return output;
}
function area(radius) {
    return Math.round(Math.PI*radius*radius);    
}
function diameter(radius) {
    return  Math.round(2*radius); 
    
}
function circumFerence(radius) {
    return  Math.round(2*Math.PI*radius); 
    
}
console.log(calculate(radius,area));
console.log(calculate(radius,diameter));
console.log(calculate(radius,circumFerence));


