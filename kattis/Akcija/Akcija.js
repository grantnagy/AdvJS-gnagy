// https://open.kattis.com/problems/akcija

"use strict";
const assert = require("assert").strict;
const readline = require('readline');

function answer(ans)
{
    let n = ans.length;
    ans.sort(function(a, b){return b - a});
    let answer = 0;
    for(var i in ans)
    {
      if (i % 3 != 2) {
        answer += ans[i];
      }
    }
    return answer;
}
function test()
{
    
    assert.strictEqual(answer([3,2,3,2]), 8);
    assert.strictEqual(answer([10,10,10]), 20);
    assert.strictEqual(answer([5,6,7,8,9]), 28);
    assert.strictEqual(answer([2,3,4]), 7);
    console.log("all test cases passed!");
}
function kattis(){
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let lineNum = 0;
    let ans = []
    let totalLines = 0;
    rl.on('line', (line) => {
      if (lineNum == 0) {
        totalLines = parseInt(line);
        lineNum++;
      }
      else {
        ans.push(parseInt(line));
        lineNum++; 
      }
      if (lineNum == totalLines+1)
        {
          console.log(answer(ans));
          rl.close();
        }
    });

}

if (require.main == module) {
    if (process.argv.length > 2 && process.argv[2] === 'test')
    test();
    else
    kattis();
}