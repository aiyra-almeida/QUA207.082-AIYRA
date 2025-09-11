const prompt = require ("prompt-sync")()
const valor = Number(prompt("Valor R$: "))
const num = Number(prompt("Nº de Parcelas: "))
const valParc = Math.floor(valor/num) // valor sem decimais
const valorFinal = valParc + (valor % num) // calucla parcela final

for (let i = 1; i < num; i++){
    console.log(`${i}ª parcela: R$ ${valParc.toFixed(2)}`)
}
    console.log(`${num}ª parcela: R$ ${valorFinal.toFixed(2)}`)