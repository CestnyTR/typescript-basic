interface Person {
  username: string;
  password?: string;
  email: string;
}
function save(person: Person) {
  console.log(person.username + " " + "was registared");
}
save({ username: "fahri", email: "fahri@gmail.com", password: "123" });



class Person {
  username: string;
  password?: string;
  email: string;
}
let person2=new Person;
person2.username;

function save2(person: Person) {
  console.log(person.username + " " + "was registared");
}
save(person2);

