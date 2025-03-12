const MathModule = {
    sum: (arr) => arr.reduce((acc, val) => acc + val, 0),

    max: (arr) => Math.max(...arr),

    min: (arr) => Math.min(...arr),

    average: (arr) => MathModule.sum(arr) / arr.length,
};

module.exports = MathModule;
