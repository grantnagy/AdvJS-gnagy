// https://open.kattis.com/problems/busnumbers

"use strict";
const assert = require("assert").strict;
const readline = require('readline');

function answer(line)
{
    let nums = line.split(" ");
    let n = nums.length;
    for (var i in nums) parseInt(nums[i]);
    nums.sort();
    return answer;
}
function test()
{
    assert.strictEqual(answer("180 141 174 143 142 175"), '141-143 174 175 180');
    console.log("all test cases passed!");
}
function kattis(){
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

  let lineNum = 0;
  let ans = []
  let seeds = 0;
  rl.on('line', (line) => {
    if (lineNum == 0) {
      lineNum++;
      seeds = parseInt(line);
    }
    else {
      lineNum++; 
      console.log(answer(line));
    }
  });

}

if (require.main == module) {
    if (process.argv.length > 2 && process.argv[2] === 'test')
    test();
    else
    kattis();
}