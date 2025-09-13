const frm = document.querySelector('form')
const resp1 = document.querySelector('h3')

frm.addEventListener('submit', (e)=>{
    e.preventDefault()
    
    const numero = Number(frm.inNum.value)
    const ano = Number(frm.inAnos.value)
    let total = numero
    let resultado = ""

    resp1.innerText = ""

    for  (let i=1; i <= ano ; i++){
        resultado += `${i}º Ano: ${total} Chinchilas\n`
        total *= 3
        
        resp1.innerText = resultado
    }
    
})