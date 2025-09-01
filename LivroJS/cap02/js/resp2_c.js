const frm = document.querySelector('form')
const resp1 = document.getElementById('outResp1')
const resp2 = document.getElementById('outResp2')

frm.addEventListener("submit", (e)=> {
    e.preventDefault()
    const prod = frm.inProd.value
    const preco = Number(frm.inPreco.value)
    const terc = preco/2
    const promo = (2*preco) + (preco/2)

    resp1.innerText = `Promoção de ${prod}`
    resp2.innerText = `Leve 2 por apenas R$: ${promo.toFixed(2)} \nO 3º sai por R$: ${terc}`
 
})