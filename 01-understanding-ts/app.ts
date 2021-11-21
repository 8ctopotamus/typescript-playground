const person = {
  name: 'Josh',
  age: 33,
  hobbies: ['Sports', 'Cooking'], // string[]
  role: [2, 'author'] // (number | string)[]
}

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase()) 
}