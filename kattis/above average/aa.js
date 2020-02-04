// https://open.kattis.com/problems/aboveaverage

"use strict";
const assert = require("assert").strict;
const readline = require('readline');

function answer(line)
{
    let nums = line.split(" ");
    let ans = 0;
    let average = 0;

    for (var i in nums)
    {
        if (parseInt(nums[i]) >= 80) average++;
    }
    console.log(average);
    console.log(parseInt(nums[0]));
    average = average / parseInt(nums[0]);
    ans = 100* average.toPrecision(5) + '%';
    return ans;
}
function test()
{
    assert.strictEqual(answer(5, 50, 50, 70, 80, 100), 40.000);
    console.log("all test cases passed!");
}
function kattis(){
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let lineNum = 1;

   /* rl.on("line", line => {
        if (lineNum == 1) { 
            let testcases = line.split(" ");
            lineNum++; 
        }
        for (var i = 0; i <= parseInttestcases[0]; i++) console.log(answer(line));
    });
    */
   rl.on("line", line => {
    if (lineNum == 1) lineNum++; 
    else {
        console.log(answer(line));
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