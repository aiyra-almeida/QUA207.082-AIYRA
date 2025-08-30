const frm = document.querySelector('form')
const resp1 = document.getElementById('outValor')

frm.addEventListener("submit", (e)=>{
    e.preventDefault()
    const valor = frm.inPreco.value
    const tempo = frm.inTime.value

    const total = Number(Math.ceil(tempo/15) * valor)

    resp1.innerText = `Valor a Pagar R$: ${total.toFixed(2)}`
})