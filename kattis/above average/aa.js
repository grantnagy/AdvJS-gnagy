// https://open.kattis.com/problems/aboveaverage

"use strict";
const assert = require("assert").strict;
const readline = require('readline');

function answer(line)
{
    let average = 0;
    let answer = 0;
    let total = 0;
    let count = 0;
    let nums = line.split(' ');
    let n = parseInt(nums[0]);
    nums.shift();

    for (var i in nums)  total += parseInt(nums[i]);
 
    average = total / n;

    for (var i in nums) {
      if (parseInt(nums[i]) > average) ++count;
    }
    answer = 100* count/n;
    if (count != 0 ) return answer.toFixed(3)+'%';
    else return answer.toFixed(3)+'%';
}
function test()
{
    assert.strictEqual(answer("5 50 50 70 80 100"), '40.000%');
    assert.strictEqual(answer("7 100 95 90 80 70 60 50"), '57.143%');
    assert.strictEqual(answer("3 70 90 80"), '33.333%');
    assert.strictEqual(answer("3 70 90 81"), '66.667%');
    assert.strictEqual(answer("9 100 99 98 97 96 95 94 93 91"), '55.556%');
    //custom testcases
    assert.strictEqual(answer("3 100 50 50"), '33.333%');
    assert.strictEqual(answer("4 60 70 80 90"), '50.000%');
    assert.strictEqual(answer("1 100"), '0.000%');
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
      lineNum++;
      totalLines = parseInt(line);
    }
    else {
      lineNum++; 
      ans.push(answer(line));
    }
    if (lineNum == totalLines+1)
      {
      console.log(ans.join("\n"));
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