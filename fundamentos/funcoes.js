/**
 * lista de funções
 */

// funções simples
function hello() {
    console.log("hello function")
}

console.log(typeof(hello))
hello()

// função atribuida

const hello2 = function () {
    console.log("hello function assigned")
} 

// a seta representa a palavra function, ou seja toda vez q ter essa flecha (arrow function) é ela substituindo a palavra function

const hello3 = () => {
    console.log("Hello arrow function")
}

console.log(typeof(hello3))
hello3()

// funções com passagem de parameros de retorno
// funções literais
function somarS(num1, num2) {
    return (console.log(num1 + num2))
}

somarS(2, 1)

// função atribuida
const somarA = function(num1, num2) {
    return (console.log(num1 + num2))
}

somarA(10, 10)

// Arrow function 
const somarAF = (num1, num2) => {
    return (console.log(num1 + num2))
}

somarAF(5, 5)

// Arrow function simplificada (retorno é implicito)
const somarAFS = (num1, num2) => console.log(num1 + num2)

somarAFS(2, 2)
