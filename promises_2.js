// console.log("again here in promises");

// var promise=new Promise(function(resolve,reject) {
//     let x=5;
//     let y=7;
//     if(x>y){
//         resolve(x);
//     }
//     else{
//         reject(y);
//     }
// })
// promise.then((data)=>console.log("max",data)).catch((data)=>console.log("max",data));



// async function foo() {
//     let a=7;
//     console.log(a);
//     return 1
//  }

// console.log(foo());
//  foo().then(data=>console.log(data));



// function foo() {
//     return Promise.resolve(1);
//  }
// foo().then(data=>console.log(data));


// async function foo() {
//     const result1 = await new Promise((resolve) => setTimeout(() => resolve('1')))
//     console.log(result1);
//     const result2 = await new Promise((resolve) => setTimeout(() => resolve('2')))
//  }
//  foo()


// <-----------doubt------>
 async function foo() {
    const p1 = new Promise((resolve) => setTimeout(() => resolve('1'), 1000))
    const p2 = new Promise((_,reject) => setTimeout(() => reject('2'), 500))
    const results = [await p1, await p2] // Do not do this! Use Promise.all or Promise.allSettled instead.
 }
 foo().catch(() => {}) // Attempt to swallow all errors...