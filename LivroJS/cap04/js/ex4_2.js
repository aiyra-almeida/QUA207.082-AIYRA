const frm = document.querySelector('form')
const resp1 = document.querySelector('h3')

frm.addEventListener('submit', (e)=>{
    e.preventDefault()
    
    const nome = frm.inNome.value
    const altura = Number(frm.inAltura.value)
    const masc = frm.inSM.checked
    
    let peso;
    if(masc){
        peso = 22 * Math.pow(altura,2) // Math.pow eleva ao quadrado
    } else {
        peso = 21 * Math.pow(altura,2)
    }

    resp1.innerText = `${nome}, Seu peso ideal é: ${peso.toFixed(3)} Kg.`
    })

    frm.addEventListener('reset', (e)=>{
        resp1.innerText= ""
    })