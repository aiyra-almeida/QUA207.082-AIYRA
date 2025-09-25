const frm = document.querySelector("form")
const resp = document.querySelector("span")

frm.addEventListener("submit", (e) =>{
    e.preventDefault()
    // Obter o nome informado e retirar espaços em branco do início da string
    const nome = frm.inNome.value.trim()
    // se o nome não (!) possuir espaço alert para incluir nome completo
    if (nome.includes(" ") == false){
        alert("Informe o nome completo")
        return
    }
    // gravar a posição do primeiro espaço
    const priespaco = nome.indexOf(" ")
    // gravar a posição do ultimo espaço
    const ultespaco = nome.lastIndexOf(" ")
    // copia nomo e sobrenome usando somente parametros substr()
    const cracha = nome.substr(0,priespaco)+nome.substr(ultespaco)
    // exibe a resposta
    resp.innerText = cracha
})
