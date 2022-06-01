const fs = require('fs');
const input = fs.readFileSync(0,'utf8').toString().split("\n");
// const input = ['7', '0 0 13 40 0 37', '0 0 3 0 7 4', '1 1 1 1 1 5', '40 0 37 0 0 13', '0 7 4 0 0 3', '1 1 5 1 1 1', '0 0 3000 4000 2500 2500']

const numOfInputs = parseInt(input[0]);

for(let i = 1; i <= numOfInputs; i++) {
  const [x1, y1, r1, x2, y2, r2] = input[i].split(" ").map(el => parseInt(el))

  const p1 = {x: x1, y: y1}
  const p2 = {x: x2, y: y2}

  // sqet(root)를 취하는 경우 소수점의 오차 때문에 비교가 힘들기 때문에 제곱된 값을 그대로 사용
  const squaredDistance = getSquaredDistance(p1, p2)
  console.log(findPointsCount(squaredDistance, r1, r2))
}

function getSquaredDistance(p1, p2) {
  return ((p1.x - p2.x) ** 2) + ((p1.y - p2.y) ** 2)
}

function findPointsCount(d, r1, r2) {
  const squaredSumR = (r1 + r2) ** 2
  const squaredDiffR = (r1 - r2) ** 2

  if(d == 0) {
    // 원점이 같을 때
    if(r1 == r2) return -1
    return 0
  } else {
    if(d > squaredSumR || d < squaredDiffR) {
      // Case4 : 0개일때
      return 0
    } else if(d == squaredDiffR || d == squaredSumR){
      // case 1,2: 1개일때(내접 또는 외접)
      return 1
    } else if(d < squaredSumR){
      // case 3: 2개일떄
      return 2
    }
  }
}
