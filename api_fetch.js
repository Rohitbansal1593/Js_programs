// console.log("api fetch.js");
// let url="js/rohit.txt";
// fetch(url).then((response)=>{
//     return response.text();
    
// }).then((data)=>{
//     console.log(data);

// })


let arr=["files/r1.txt","files/r2.txt","files/r3.txt"];
arr.forEach( async element => {
    fetch(element).then((response)=>{
        return response.text();
        
    }).then((data)=>{
        console.log(data);
    
    })
    

    
});

