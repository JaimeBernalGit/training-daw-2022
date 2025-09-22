const assert = require('assert').strict;

function toHoursMinutesSeconds(value) {
    let h = value/3600
    let hora = Math.floor(h)
    let m = (value%3600)/60
    let minutos = Math.floor(m)
    let s = (value%3600)%60
    if (minutos<10 && s<10){
        return hora + ":0" + minutos + ":0" + s
    }else if(minutos<10){
        return hora + ":0" + minutos + ":" + s
    }else if(s<10){
        return hora + ":" + minutos + ":0" + s
    }else {
        return hora + ":" + minutos + ":" + s
    }
    
}

assert.deepStrictEqual(toHoursMinutesSeconds(3600), "1:00:00")
assert.deepStrictEqual(toHoursMinutesSeconds(3720), "1:02:00")
assert.deepStrictEqual(toHoursMinutesSeconds(3725), "1:02:05")
assert.deepStrictEqual(toHoursMinutesSeconds(7540), "2:05:40")