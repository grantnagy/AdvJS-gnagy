// https://open.kattis.com/problems/sort

"use strict";
const assert = require("assert").strict;
const readline = require('readline');

function answer(line)
{
    let nums = line.split(" ");
    let n = nums.length;
    let freq = {}, value;
    for (var i = 0; i < n; i++) {
      value = nums[i];
      if (value in freq) freq[value]++;
      else freq[value] = 1;
    }
    for (var x in freq) {
      console.log(freq);
      if (freq[x] == freq[x+1]) freq[x] += 2;
    }
    console.log(freq);

     function compareFreq(a, b) {
     return freq[b] - freq[a];
   }
    nums.sort(compareFreq);
    return nums.toString().replace(/,/g, " ");
}
function test()
{
    //assert.strictEqual(answer("2 1 2 1 2"), '2 2 2 1 1');
    assert.strictEqual(answer("1 3 3 3 2 2 2 1 1"), '1 1 1 3 3 3 2 2 2');
    //assert.strictEqual(answer("11 33 11 77 54 11 25 25 33"), '11 11 11 33 33 25 25 77 54');
    console.log("all test cases passed!");
}
function kattis(){
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

  let lineNum = 0;
  let ans = []
  let n = 0;
  rl.on('line', (line) => {
    if (lineNum == 0) {
      lineNum++;
      n = parseInt(line);
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