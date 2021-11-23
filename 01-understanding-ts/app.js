var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READONLY"] = 1] = "READONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: 'Josh',
    age: 33,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN // (number | string)[]
};
