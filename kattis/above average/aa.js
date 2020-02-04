// https://open.kattis.com/problems/aboveaverage

"use strict";
const assert = require("assert").strict;
const readline = require('readline');

function answer(line)
{
    let nums = parseInt(line.split(" "));
    let ans = 0;
    let average = 0;

    for (let grade of line)
    {
        if (grade => 80) average++;
        
    }
    average = average / line[0];

    return ans;
}
function test()
{
    assert.strictEqual(answer(100, 99), 1);
    assert.strictEqual(answer(7200, 534), 6666);
    assert.strictEqual(answer(2020, 82098), 80078);
    console.log("all test cases passed!");
}
function kattis(){
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
    let lineNum = 1;
    rl.on("line", line => {
        if (lineNum == 1) lineNum++;
        else {
            console.log(answer(line));
        }
    });
}
}

if (require.main == module) {
    if (process.argv.length > 2 && process.argv[2] === 'test')
    test();
    else
    kattis();
}