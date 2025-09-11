const prompt = require ("prompt-sync")()
const produto = prompt("Produto: ")
const num = Number(prompt("Nº de Etiquetas: "))

// cria um laço de repetição até num/2

for(let i = 1; i <= num/2; i++){
    console.log(`${produto.padEnd(30, ".")} ${produto.padEnd(30, ".")}`)
}
if (num%2 == 1){ // se a qtd de etiquetas for impar
    console.log(produto) // imprime mais uma etiqueta
}
