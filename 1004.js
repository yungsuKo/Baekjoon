// 점과 점 사이에 관통해야하는 원의 숫자를 구해라
// 케이스별로 나눠야 할 듯
// 기준은 점 두개 이고, 각 점이 하나의 원 안에 속해있을 때 원을 관통해야함
// 이 때, 점 두개가 동인한 원안에 소속되어 있으면 안됨

const input = require('fs').readFileSync('./dummy/dummy_1004').toString().trim().split("\n");

const casecnt = input.shift();
const locations = input.shift();
const planetcnt = input.shift();

for(let i = 1; i <= planetcnt; i++) {
  const [x, y, r] = input[i].split(" ").map(el => parseInt(el))
  console.log(x,y,r)
}
