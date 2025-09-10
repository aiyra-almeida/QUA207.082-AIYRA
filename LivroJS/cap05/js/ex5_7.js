const frm = document.querySelector('form')
const resp = document.querySelector('h3')



frm.addEventListener('submit', (e)=>{
    e.preventDefault()

    const numero = Number(frm.inNum.value)
    let estrelas = ""  // variável  que irá concatenar as estrelas/traços

    for(let i = 1; i <= numero; i++){
        if(i%2 ==0){
            estrelas += " - " // posição impar do i: -
        }else{
            estrelas += " * " // posição par do i: *
        }
    }
resp.innerText = estrelas
})