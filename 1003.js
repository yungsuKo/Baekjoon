// const fs = require('fs');
// const input = fs.readFileSync('./dummy/dummy_1003','utf8').toString().split("\n");
//
// console.log(input);
//
// const numOfInputs = parseInt(input[0])
//
// console.log(numOfInputs)

const input = require('fs').readFileSync('./dummy/dummy_1003').toString().trim().split("\n");

const len = input.shift();

console.log(input);
console.log(len);

// fibonacci(0); ===> 0 => 0,0
// fibonacci(1); ===> 1 => 0,1
// fibonacci(2); ===> fibonacci(0) + fibonacci(1) ===> 0 1 => 1,1
// fibonacci(3); ===> fibonacci(1) + fibonacci(2) ===> 1 0 1 => 1,2
// fibonacci(4); ===> fibonacci(2) + fibonacci(3) ===> 0 1 1 0 1 => 2,3
// fibonacci(5); ===> fibonacci(3) + fibonacci(4) ===> 1 0 1 0 1 1 0 1 => 3,5
// fibonacci(6); ===> fibonacci(4) + fibonacci(5) ===> ...1 0 1 0 1 1 0 1 => 5,8

for(let i = 0; i < len; i++){
  let zeroCount = 1, oneCount = 0;
  for(j = 1; j<=input[i]; j++){
    const tmpCount = zeroCount;

    zeroCount = oneCount;
    oneCount = tmpCount + oneCount;
  }
  console.log(zeroCount, " ", oneCount);
}
