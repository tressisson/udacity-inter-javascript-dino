const greet = (name, base_greeting) => {
    return `${base_greeting} ${name}`
}

let greeting = 'Hello, '

greet('Arthur.', greeting)
// now we can reuse greeting, and the greet function is pure

console.log(greet('Arthur.', greeting)) 
// expected output: 
//  Hello, Arthur. 
//  Hello, Arthur.