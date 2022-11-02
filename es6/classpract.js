class Employee{
constructor(name,company,address){
    this.name=name
    this.company=company
    this.address=address
}
static a=10
b=20

static add(a,b){
return a+b;

// emplo=new Employee()
// console.log(emplo.b);
//console.log(this.a);

}
sample(){
   return `i am ${this.name} and this company is best`;
 //console.log(Employee.a);

//console.log(this.b);

}
demo(){
    return `my company ${this.company} `;
}
}
 emp =new Employee("sri","ty","banglore")
 console.log(emp);
// console.log(Employee.a);  //static variable //10
//console.log(emp.b);  //non static variable 20
//console.log(Employee.add(2,4));
// console.log(emp.sample());
// console.log(emp.demo());
