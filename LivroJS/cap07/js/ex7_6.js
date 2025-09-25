const frm = document.querySelector("form")
const resp = document.querySelector("pre")

frm.addEventListener("submit", (e)=> {
    e.preventDefault()
    // obter senha informada pelo usuário
    const senha = frm.inSenha.value
    // vetor com erros
    const erros = []
    // verificar se o tamanho da senha é inválido
    if (senha.length < 8 || senha.length > 15){
        erros.push ("Não possui entre 8 e 15 caracteres")
    }
        // verificar se não possui número
    if (senha.match(/[0-9]/g) == null){
        erros.push("Não possui números (no mínimo 1)")
    }
        // verificar se não possui lentra minuscula
    if (senha.match(/[a-z]/g) == null){
        erros.push("Não possui letras minúsculas (no mínimo 1)")
    }    
        // verificar se não possui lentra maiúscula ou se possui apenas uma 
    if (senha.match(/[A-Z]/g) == null || senha.match(/[A-Z]/g).length < 2){
        erros.push("Não possui letras maiúsculas (no mínimo 2)")
    }
        // verificar se não possui caracter especial ou "_"
    if (senha.match(/[\W|_]/g) == null){
        erros.push("Não possui símbolos (no mínimo 1)")
    }
        // se o vetor estiver vazio (significa que não foi encontrado erros)
    if(erros.length == 0){
        resp.innerText = "OK! Senha Válida"
    }else{
        // senão imprimir lista erros
    resp.innerText = "Error...\n"
    resp.innerText += `${erros.join("\n")}`}
})