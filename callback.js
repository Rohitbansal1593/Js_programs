console.log("callback.js");
setTimeout(() => {
    console.log("A");
    
}, 2000);
function x(callback) {
    console.log("X")
    callback();
    
}
function y() {
    console.log("Y");
    
}
x(y);