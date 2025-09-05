const frm = document.querySelector('form')
const resp1 = document.querySelector('#outResp1')
const resp2 = document.querySelector('#outResp2')

frm.addEventListener('submit', (e)=>{
    e.preventDefault()

    const valor = Number(frm.inValor.value)
    const msg = `Saldo Insuficiente`

    let troco
    let tempo
    let msg1

    if(valor >= 3){
        troco = (valor - 3)
        tempo = "120 min"
    } else if (valor >= 1.75){
        troco = (valor - 1.75)
        tempo = "60 min"
    } else if (valor >= 1){
        troco = (valor - 1)
        tempo = "30 min"
    } else if (valor < 1){        
        tempo = msg
    }

    resp1.innerText=`Tempo: ${tempo}`
    resp2.innerText=`Troco R$: ${troco.toFixed(2)}`
})

