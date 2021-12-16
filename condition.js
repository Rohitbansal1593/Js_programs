console.log("condition.js")
//maximum among three
let a=7;
let b=15;
let c=10;
if (a>b && a>c)
{
    console.log("a is greatest with value",a)
}
else if (b>c && b>a){
    console.log("b is great",b)
}
else{
    console.log("c is great",c)
}
switch(a)
{
    case 1: 
           console.log("ok")
           break
    case 2: 
           console.log("7")
           break
    default: 
            console.log("default")
            break
}

let t=2;
let t1="2";
console.log(t===t1);