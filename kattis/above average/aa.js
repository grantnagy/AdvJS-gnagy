// https://open.kattis.com/problems/aboveaverage

"use strict";
const assert = require("assert").strict;
const readline = require('readline');

function answer(line)
{
    let answer = 0;
    let average = 0;
    let nums = line.split(' ');

    for (var i in nums)
    {
        if (parseInt(nums[i]) >= 80) average++;
    }

    average /= parseInt(nums[0]);
    answer = 100* average.toFixed(3);
    return answer.toPrecision(5)+'%';
}
function test()
{
    assert.strictEqual(answer("5 50 50 70 80 100"), '40.000%');
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
    //else console.log(answer(line));
    else {
      lineNum++; 
      ans.push(answer(line));
    }
    //console.log(lineNum);
    // print result once when all the results are collected
    if (lineNum == totalLines+1)
      {console.log(ans.join("\n"));
      }
  });

}

if (require.main == module) {
    if (process.argv.length > 2 && process.argv[2] === 'test')
    test();
    else
    kattis();
}