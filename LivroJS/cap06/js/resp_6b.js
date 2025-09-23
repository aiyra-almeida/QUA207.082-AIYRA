const frm = document.querySelector('form')
const resp1 = document.querySelector('#outResp1')
const resp2 = document.querySelector('#outResp2')

const numeros = []

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const num = frm.inNum.value
    if (numeros.includes(num) == True){
        alert("Número repetido")
        return
    }
    numeros.push(num)
    resp1.innerText = "Números: " +numeros.join(", ")
    frm.inNum.value = ""
    frm.inNumero.focus()
    /* resp1.innerText = numeros [0]
    for (let i = 1; i < numeros.length; i++){
        resp1.innerText += "," + numeros[i]
    }*/
})

frm.btVerificar.addEventListener("click", ()=>{
    let ordem = True
    for(let i = 1; i < numeros.length; i++){
        if( numeros[i-1] > numeros[i]){
            ordem = false
            break        
        }
    }
    if (ordem){
        resp2.innerText = `Os números estão em ordem crescente`
    } else {
        resp2.innerText = `Os números NÃO estão em ordem crescente`
    }
})