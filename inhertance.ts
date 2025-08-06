/*
protected: we can use  in  extended classes but we cant use outside classes
private : we can only use in class we cant use any other class.we must use get/set methods
public : default value we can use everywhere
 */
class Person {
  protected name: string;
  private email: string;
  save() {
    console.log("Registration Successful");
  }

  get mail() {
    return this.email;
  }

  set mail(email) {
    this.email = email;
  }
}
class Customer extends Person {
  sale() {
    this.name;
    console.log("x item sold");
  }
}
class Employee extends Person {
  salary() {
    console.log("Salary paid");
  }
}
let person = new Person();
person.save;

let customer = new Customer();
customer.save;
customer.sale;
customer.mail;
let employee = new Employee();
employee.save;
employee.save;
