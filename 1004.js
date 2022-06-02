// 점과 점 사이에 관통해야하는 원의 숫자를 구해라
// 케이스별로 나눠야 할 듯
// 기준은 점 두개 이고, 각 점이 하나의 원 안에 속해있을 때 원을 관통해야함
// 이 때, 점 두개가 동인한 원안에 소속되어 있으면 안됨

const input = require('fs').readFileSync('./dummy/dummy_1004').toString().trim().split("\n");

const casecnt = input.shift();


for(let i = 0; i<casecnt; i++){
  let cnt = 0;
  const locations = input.shift();
  const planetcnt = input.shift();
  for(let j = 1; j <= planetcnt; j++) {
    const [ax, ay, bx, by] = locations.split(" ").map(e => parseInt(e));
    const output = input.shift();
    const [cx, cy, cr] = output.split(" ").map(el => parseInt(el));
    cnt = cnt + r1(ax, ay, bx, by, cx, cy, cr);
  }

  console.log(cnt)
}



// 원이 좌표 1 기준으로는 안에 있고, 좌표 2기준으로는 밖에 있고,
// 원이 좌표 2 기준으로는 안에 있고, 좌표 1기준으로는 밖에 있으면 됨

function r1(ax, ay, bx, by, cx, cy, cr){
  if(((cx-ax)**2+(cy-ay)**2)<cr**2){
    if(((cx-bx)**2+(cy-by)**2)<cr**2){
      return 0;
    }else{
      return 1;
    }
  }else{
    if(((cx-bx)**2+(cy-by)**2)<cr**2){
      return 1;
    }else{
      return 0;
    }
  }
}
