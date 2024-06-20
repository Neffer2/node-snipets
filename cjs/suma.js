function sum(a , b) {
    return a + b;
}


/** COMMONJS (CJS) REQUIRE MODULE **/
// module.exports = sum;
module.exports = {sum}; // This is the same as the previous line but with destructuring (mandatory name of the object)
module.exports = { // This is the same as the previous line.
    sum: sum
};
module.exports = { // This is the same as the previous line.
    sum: function(a, b) {
        return a + b;
    }
};
module.exports = { // This is the same as the previous line.
    sum: function(a , b) {
        return a + b;
    }
}
module.exports = {
    sum: (a, b) => a + b
}