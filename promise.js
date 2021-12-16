console.log("promise.js");
d = [
    { name: "rohit", city: "jaipur" },
    { name: "aashu", city: "bihar" }
]
function fun1(newEntry) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            let len = d.length;
            d.push(newEntry);
            if (d.length == len + 1) {
                resolve();
            }
            else {
                reject("element not been added");
            }
        }, 2000);
    })
}
let str = { name: "varun", city: "kanpur" };
fun1(str).then(function () {
    d.forEach(element => {
        console.log(element.name);
    });
}).catch(function (error) {
    console.log(error);
})
