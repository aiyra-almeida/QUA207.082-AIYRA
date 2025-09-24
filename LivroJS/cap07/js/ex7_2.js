const frm = document.querySelector("form")
const resp = document.querySelector("span")

frm.addEventListener("submit", (e)=> {
    e.preventDefault()
    // conteúdo do campo em maiúsculo
    const palavra = frm.inFruta.value.toUpperCase()
    // limpar resposta
    resp.innerText = ""
    // percorrer todos os caractertes da palavra
    for( const letra of palavra){  
        //se a leta for igual a inicial da string
        if (letra == palavra.charAt(0)){
            resp.innerText += letra        
        // senão, colocar o _
        } else {
            resp.innerText += "_"
        }
    }
    // preencher com "", conforme o tamanho})
    frm.inFruta.value = "*".repeat(palavra.length)
})