const frm = document.querySelector('form')
const resp = document. querySelector('h3')

frm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const numero =  Number(frm.inNum.value)
    const resp1 = numero % 2

    let num
    if (resp1 == 0){
        num = "Par"
    } else {
        num = "Ímpar"
    }

    resp.innerText= `Seu número é ${num}`
})

frm.addEventListener('reset', (e)=>{
        resp1.innerText= ""
    })