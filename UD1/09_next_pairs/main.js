const assert = require('assert').strict;

function nextPairs(value) {
    let par1=value;
    let par2=value;
    do{
        par1--
    }while(par1%2!=0)
    do{
        par2++
    }while(par2%2!=0)
    return [par1, par2]
}

assert.deepStrictEqual(nextPairs(3), [2,4])
assert.deepStrictEqual(nextPairs(4), [2,6])