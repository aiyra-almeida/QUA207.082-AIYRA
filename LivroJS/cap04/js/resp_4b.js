const frm = document.querySelector('form')
const resp = document.querySelector('outResp1')

frm.addEventListener('submit', (e)=>{
    e.preventDefault()

    const velocPerm = Number(frm.inVelPerm.value)
    const velocCond = Number(frm.inVelCond.value)
    const comp = Number(velocPerm*1.2)

    let status;

    if(velocCond < comp){
        status = "Sem Multa"
    } else if (velocCond <= comp){
        status = "Multa Leve"
    } else if(velocCond > comp){
        status = "Multa Grave"
    }

resp.innerText = `Situação: ${status}`

})
//  frm.addEventListener('reset', (e)=>{
        // resp.innerText= ""
    // })