var combine = function (input1, input2) {
    return input1 === 'number' && typeof input2 === 'number'
        ? input1 + input2
        : input1.toString() + input2.toString();
};
var combinedNames = combine('first', ' last');
var combinedAges = combine('40', 40);
console.log(combinedNames);
console.log(combinedAges);
