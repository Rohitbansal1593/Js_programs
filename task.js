//let d=element=>  element;


function multiply(a,b){
    if(!b){
        return function name1(c){
             return c*a;
        }
    }
    else{
        return a*b;
    }
    

}
console.log(multiply(7,6));
name1=multiply(7);
console.log(name1(5));

// d(5);

