// criar referencias ao form e aos elementos de resposta (pelo id)
const frm = document.querySelector('form')
const resp1 = document.querySelector('#outResp1')
const resp2 = document.querySelector('#outResp2')
const resp3 = document.querySelector('#outResp3')

// criar um ouvinte de evento, acionado quando o botão submit foi clicado

frm.addEventListener("submit", (e)=> {
    const veiculo = frm.inVeiculo.value
    const preco = frm.inPreco.value

    const entrada = preco * 0.5
    const parcela = entrada / 12

    resp1.innerText = `Promoção: ${veiculo}`
    resp2.innerText = `Entrada de R$: ${entrada.toFixed(2)}`
    resp3.innerText = `+12 de R$: ${parcela.toFixed(2)}`

    e.preventDefault()
})