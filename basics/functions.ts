function add(n1: number, n2: number) {
  return n1 + n2;
}

const addNumberToString = add(50, 32);
console.log(addNumberToString);

function printResult(num: number): void {
  console.log("Result: " + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResult(add(5, 12));

let combinedValue: (a: number, b: number) => number;

combinedValue = add;
// combinedValue = printResult;
// combinedValue = 5;

console.log(combinedValue(8, 8));

// let someValue: undefined;

addAndHandle(10, 20, (result) => {
  console.log(result);
  return result;
});

function sendReq(data: string, cb: (response: any) => void) {
  return cb({ data: "Hello World" });
}

sendReq("Send Here!", (response) => {
  console.log(response);
  return true;
});
