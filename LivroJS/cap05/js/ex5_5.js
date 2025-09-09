const frm = document.querySelector('form')
const resp1 = document.querySelector('#outResp1')
const resp2 = document.querySelector('#outResp2')

let resposta = "" // string com a rsposta a ser exibida
let numContas = 0 // inicializa o contador
let valTotal = 0 // po acumulador (variaverei globais)

frm.addEventListener('submit', (e)=>{
    e.preventDefault()
    
    const descricao = frm.inDesc.value // obtem os dados da conta
    const valor = Number(frm.inValor.value)

    numContas++
    valTotal += valor // ou valorTotal = valTotal + valor
    resposta += `${descricao} - R$: ${valor.toFixed(2)}\n`

    resp1.innerText = `${resposta} -------------------------`
    resp2.innerText = `${numContas} Conta(s) - Total R$: ${valTotal.toFixed(2)}`

    frm.inDesc.value = "" // limpa todos os campos
    frm.inValor.value = ""
    frm.inDesc.focus() // posiciona o | no campo inDescricao do form
})

frm.addEventListener('reset', (e)=>{
    frm.inDesc.focus()
    resposta = 0
    numContas = 0
    resp1.innerText= ""
    resp2.innerText = ""
})