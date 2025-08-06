function results(x: number): number {
  return x;
}
let y = results(5);
console.log(y);

function results2(x: string): string {
  return x;
}
let z = results2("Hello");
console.log(z);

function results3<T>(x: T): T {
  return x;
}
let t = results3<number>(3);
let t1 = results3(3);
let t2 = results3<string>("Hi");
console.log(t);
console.log(t1);
console.log(t2);

class GenericClass<T> {
  variable: T;
  y(parametre: T): T {
    return parametre;
  }
}
let a =new GenericClass<number>();
a.y(5)