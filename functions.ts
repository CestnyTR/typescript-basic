function getSum(x, y, z) {
  return x + y + z;
}
console.log(getSum("hi", 5, 6));

function getSum2(x: number, y: number, z: number): number {
  return x + y + z;
}

console.log(getSum2(4, 5, 6));

let getSum3 = function (x: number, y: number, z: number): number {
  return x + y + z;
};

console.log(getSum3(4, 5, 6));

function getSum4(x: number, y: number, z?: number): number {
  if (typeof z !== "undefined") {
    return x + y + z;
  }
  return x + y;
}

console.log(getSum4(4, 5, 6));
function getSum5(x: number, y: number, z: number = 5): number {
  return x + y + z;
}

console.log(getSum5(4, 5, 6));

function getAverage(...x: number[]): number {
  let total = 0;
  for (let i = 0; i < x.length; i++) {
    total += x[i];
  }
  const result = total / x.length;
  return result;
}
console.log(getAverage(1, 2, 3));

getAverage(5, 6, 6);
getAverage(5, 6, 5, 6);
getAverage(5, 6, 1, 0, 5);
getAverage(5, 6, 5, 61, 0, 5);
getAverage(5, 6, 5, 3, 1, 7, 9, 25, 61, 0, 5);


