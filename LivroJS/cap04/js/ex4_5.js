const frm = document.querySelector('form')
const resp = document.querySelector('h3')

frm.addEventListener('submit', (e)=>{
    e.preventDefault()

    const num = Number(frm.inNum.value)
    const raiz = Math.sqrt(num) // calcular a raiz do numero

    if(Number.isInteger(raiz)){
        resp.innerText = `Raíz ${raiz}` // determinar se é inteiro ou não
    } else {
        resp.innerText = `Não há raíz exata para ${num}.` // mostrar mensagem
    }
})