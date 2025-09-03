const frm = document.querySelector('form')
const resp1 = document.querySelector('#outResp1')
const resp2 = document.querySelector('#outResp2')
const resp3 = document.querySelector('#outResp3')

frm.addEventListener('submit', (e)=>{
    e.preventDefault()
    limparResp()
    
    const saque = Number(frm.inSaque.value)
    
    if(saque %10!=0) { // se saque não é multiplo de 10
        alert(`Valor inválido para notas disponíveis (R$ 10, 50, 100)`)
        frm.inSaque.focus() // o cursor do teclado será direcionado o input
        return // retorno vazio para interromper a sequencia do script
    }

    const notasCem = Math.floor(saque/100)
    let resto = saque % 100
    const notasCinquenta = Math.floor(resto/50)
    resto = resto % 50
    const notasDez = Math.floor(resto/10)
    resto = resto % 10 

    if(notasCem > 0){
        resp1.innerText = `Notas de R$ 100 : ${notasCem}`
    }
    if(notasCinquenta > 0){
        resp2.innerText = `Notas de R$ 50 : ${notasCinquenta}`
    }
    if(notasDez > 0){
        resp3.innerText = `Notas de R$ 10 : ${notasDez}`
    }
})

function limparResp(){
    resp1.innerText = ""
    resp2.innerText = ""
    resp3.innerText = ""
}