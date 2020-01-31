"use strict";
const assert = require('assert').strict;

var n, c;
//n = length of message
//c ints smaller than

const readline = require('readline');

function answer(numsarray)
{
    
    for (var i of numsarray)
    {
        
    }

}

function test()
{
    assert.strictEqual(answer([5, 2, 2, 1, 2, 1, 2]), [2, 2, 2, 1, 1], "fail");
    assert.strictEqual(answer([4, 10, 2, 5, 9, 5]), [5, 5, 9, 2]);
    console.log("test cases passed");
}

function kattis(){
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    var linenum =0;

    rl.on('line', (line) => {
        if (linenum === 0){ 
            
            linenum++;}
        else {
            var strnums = line.split(" ");
            var intnums = [];
            for (let s of strnums)
            {
                intnums.push(parseInt(s));
            }
            console.log(answer(intnums));
           rl.close();
        }
    });
}


if (require.main == module) {
    //console.log(process.argv);
    if (process.argv.length > 2 && process.argv[2] === 'test')
    //node sort.js test
        test();
    else
        kattis();
}