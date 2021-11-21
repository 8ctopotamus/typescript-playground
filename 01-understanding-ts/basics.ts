// using types
function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2
  return showResult 
    ? console.log(`${phrase}${result}`) 
    : result
}

add(5, 10, true, 'Result is: ')

