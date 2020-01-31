// https://open.kattis.com/problems/different

"use strict";
const assert = require("assert").strict;
const readline = require('readline');

function answer(a,b)
{
    let ans = Math.abs(a-b);
    return ans;
}

function test()
{
    assert.strictEqual(answer(10, 12), 2);
    assert.strictEqual(answer(71293781758123, 72784), 71293781685339);
    assert.strictEqual(answer(1, 12345677654321), 12345677654320);
    //my 3 custom test cases
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

    var linenum =0;

    rl.on('line', (line) => {
        var nums = line.split(' ');
        var a = parseInt(nums[0]);
        var b = parseInt(nums[1]);
        console.log(answer(a,b));
        rl.close();
    });
}


if (require.main == module) {
    if (process.argv.length > 2 && process.argv[2] === 'test')
    test();
    else
    kattis();
}