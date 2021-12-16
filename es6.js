console.log("we are here");
class employee{
    constructor(name,salary,age){
        this.name=name;
        this.salary=salary;
        this.age=age;
    }
    detail(){
        console.log(`${this.salary} is low --${this.name}`)
    }
    static add(a,b){
        return a+b;
    }
}
class programmer extends employee{
    constructor(name,salary,age,bank_acc,degignation)
    {
        super(name,salary,age);
        this.bank_acc=bank_acc;
        this.degignation=degignation;
    }
    degignationOf(){
        return `we are proud ${this.degignation}`;
    }
}
// e1=new employee("rohit",40000,22);
// e1.detail();
// console.log(employee.add(3,5));
p1=new programmer("mohit",40000,12,"no123","Programmer");
console.log(p1.degignationOf());
console.log(p1.degignationOf());