const frm = document.querySelector('form')
const resp1 = document.querySelector('h3')

frm.addEventListener('submit', (e)=>{
    e.preventDefault()
    
    const numero = Number(frm.inNum.value)
    const ano = Number(frm.inAnos.value)
    let total = ""

    for  (let i=1; i <= ano ; i++){
        let geracao = numero + (geracao*2)
        total = Number(geracao + (2*total))
        resp1.innerText += `${i}º Ano: ${total} Chinchilas\n`
    }
    
})