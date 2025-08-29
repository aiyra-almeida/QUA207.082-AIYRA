const frm = document.querySelector('form')
const resp1 = document.getElementById('outResp1')
const resp2 = document.getElementById('outResp2')

frm.addEventListener("submit", (e)=> {
    e.preventDefault()
    const med = frm.inMed.value
    const valor = Number(frm.inPreco.value)

    const preco = Math.floor(valor)
    const promo = preco * 2

    resp1.innerText = `Promoção de ${med}`
    resp2.innerText = `Leve 2 por apenas R$: ${promo}`
 
})