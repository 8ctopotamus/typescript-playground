var person = {
    name: 'Josh',
    age: 33,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author'] // (number | string)[]
};
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
