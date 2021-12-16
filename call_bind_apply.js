function detail(marks,height){
    console.log(`${this.name} : ${this.surname} with ${height} height and ${marks} marks`);
}
let d1={
    name:'rohit',
    surname:'bansal'
}
let d2={
    name:'Aashutosh',
    surname:'melati'
}
//call()
detail.call(d1,56,"5'6''");

//apply()
detail.apply(d2,[50,"5'4''"]);

//bind()
//in bind we will get a copy of function in return with the reference

let new_detail=detail.bind(d2,67,"5'7''");
new_detail();

