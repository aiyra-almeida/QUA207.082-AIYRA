const frm = document.querySelector('form')
const resp = document.querySelector('h3')
const secreto = Math.floor(Math.random()*100)
let tentativa = 0


frm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const num = Number(frm.inNum.value)
    tentativa++

if (num < secreto){
    resp.innerText = `O número secreto é maior`
} else if (num > secreto) {
    resp.innerText = `O número secreto é menor`
} else {
    resp.innerText = `Parabéns, você acertou com ${tentativa} tentativa(s)`
}

})

frm.addEventListener('reset', (e)=>{
        resp1.innerText= ""})