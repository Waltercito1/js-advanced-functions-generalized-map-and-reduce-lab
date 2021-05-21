// Add your functions here

//Map(src,function(a){ return a * -1});

function map(src, callback) {
    const r = [];

    for (let i = 0; i < src.length; i++) {
        const token = src[i];
        r.push(callback(token));
    }  
    return r;
}

function reduce(src, callback, startValue) {
    let total;
    if (startValue) {
        total = startValue;
        for (let i = 0; i < src.length; i++) {
        total = callback(src[i], total);
        }
        return total;
    } else {
        total = src[0];
        for (let i = 1; i < src.length; i++) {
        total = callback(src[i], total);
        }
        return total;
    }
}