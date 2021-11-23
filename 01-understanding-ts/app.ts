const combine = (input1: string | number, input2: string | number) => {
  return input1 === 'number' && typeof input2 === 'number' 
    ? input1 + input2 
    : input1.toString() + input2.toString()
}

const combinedNames = combine('first', ' last')
const combinedAges = combine('40', 40)

console.log(combinedNames)
console.log(combinedAges)