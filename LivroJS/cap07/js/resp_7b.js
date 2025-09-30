// Elaborar um programa que leia
// uma frase e informe se ela é ou não um palíndromo (converter a frase para
// caixa alta).

const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e)=> {
    e.preventDefault()
    const frase1 = frm.inFrase.value
    const frase = frm.inFrase.value.replace(/ /g,"").toUpperCase()
    let palindromo = ""
    for (let i = frase.length-1; i >= 0; i--)
        palindromo += frase[i]
    if (frase == palindromo){
    resp.innerText = `${frase1.toUpperCase()}`+` É palíndromo`
    }else{
    resp.innerText = `${frase1.toUpperCase()}` + ` Não é palíndromo`
    }
})
