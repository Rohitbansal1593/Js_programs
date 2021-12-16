function sumof(array) {
    sum=0
    array.forEach(function(element) {
        sum+=element;
        
    });
    return sum;
}
arr=new Array(1,4,5,6,7);
console.log(sumof(arr));