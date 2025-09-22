const assert = require('assert').strict;

function abs(value) {
    let absoluto= 0;
    absoluto=Math.sqrt(value*value);
    return absoluto;
}

assert.strictEqual(abs(4), 4)
assert.strictEqual(abs(-4), 4)
assert.strictEqual(abs(0), 0)