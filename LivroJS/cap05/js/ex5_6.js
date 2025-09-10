const frm = document.querySelector('form')
const resp = document.querySelector('h3')



frm.addEventListener('submit', (e)=>{
    e.preventDefault()

    const numero = Number(frm.inNum.value)
    let primo = true // flag
    
    // percorre os possíveis divisores impares iniciando do 3 até a metade do número
    for (let i = 3; i <= numero/2; i = i+2){ 
        if(numero % i == 0){ // verifica se i (3,5,7,9...) é divisor do número
            primo = false // muda a flag
        break
        }
    }
    if((numero <=3 || numero %2 != 0) && primo){
        resp.innerText = `${numero} é primo.`
    } else {
        resp.innerText = `${numero} não é primo.`
    }
    

})
