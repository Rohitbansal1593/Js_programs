// console.log("prototype.js")
// function college(id, name) {
//     this.id = id,
//         this.name = name,
//         this.detail = function () {
//             console.log(`${this.id} id is from ${this.name} college`);
//         }

// }
// college.prototype.getdetails=function(collegename){
//     this.C_name=collegename

// }
// let entry1 = new college("Pgi17", "poornima");
// // let entry2 = new college("jecc17", "Jecrc");


let proto = {
    E_name: "roshan",
    changeCity: function (name) {
        this.city = name;

    }
};


//first way 
// let obj=Object.create(proto);
// console.log(obj);

//second way

let obj1 = Object.create(proto, {
    city: { value: "jaipur", writable: true }
})



// //protype inhertitance

function employee(name, experience, salary = 1000) {
    this.name = name;
    this.salary = experience * salary;
    this.experience = experience;
}
employee.prototype.detail = function (name) {
    console.log(`${this.salary} and ${this.experience}`);

}

let e1 = new employee("Rohit", 4);

function degignation(name, experience, post, salary = 1000) {
    employee.call(this, name, experience, salary = 1000);
    this.post = post;
}
degignation.prototype = Object.create(employee.prototype);
// degignation.prototype.constructor=degignation;
let deg1 = new degignation("rohit", 12, "ceo");


