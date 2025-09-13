const frm = document.querySelector('form')
const resp1 = document.querySelector('#outResp1')
const resp2 = document.querySelector('#outResp2')

frm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const num = Number(frm.inNum.value)
    let div = `Divisores do ${num}: 1`
    let soma = 1

    for (let i=2; i<= num/2; i++){
        if(num%i == 0){
            soma+=i
            div+= ", " + i
    }
    }
    resp1.innerText = `${div}`
    if (soma == num){    
        resp2.innerText = `${num} é perfeito`
    } else {
        resp1.innerText = `${num} não é perfeito`
    }
})