const frm = document.querySelector('form')
const resp = document.querySelector('h3')



frm.addEventListener('submit', (e)=>{
    e.preventDefault()

    const numero = Number(frm.inNum.value)
    let numDiv = 0 // declara e inicializa o contador (numDiv é ocontador)

    for (let i = 1; i<= numero; i++){ //percorre todos os possiveis divisores de 1 até o numero declarado
        if(numero % i == 0){ // verifica se i (1,2,3,...) é divisor do numero
            numDiv++ // se é, incrementa no contador
        }
    }
    if(numDiv == 2){
        resp.innerText = `${numero} é primo.`
    } else {
        resp.innerText = `${numero} não é primo.`
    }
    

})
