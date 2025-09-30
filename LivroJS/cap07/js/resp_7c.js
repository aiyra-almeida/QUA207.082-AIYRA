const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

frm.addEventListener("submit", (e)=> {
    e.preventDefault()
    const dtInfracao = frm.inData.value.split("-")
    const valorMulta = Number(frm.inMulta.value)
    const dtDesconto = new Date()

    dtDesconto.setFullYear(Number(dtInfracao[0]))
    dtDesconto.setMonth(Number(dtInfracao[1]+1))
    dtDesconto.setDate(Number(dtInfracao[2])+90)
    // dtDesconto = dtDesconto + (100*60*60*24*90)
    resp1.innerText = "Data Limite para pagamento com Desconto: "
    resp1.innerText += dtDesconto.getDate().toString.padStar(2,"0") + "/"
    resp1.innerText += (dtDesconto.getMonth()+1).toString.padStar(2,"0") + "/"
    resp1.innerText += dtDesconto.getFullYear
    resp2.innerText += "Valor com desconto R$" + (valorMulta*0.8).toFixed(2)
})