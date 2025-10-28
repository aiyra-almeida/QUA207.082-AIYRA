const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const nome = frm.inNome.value
    function validarNome() {
        if (nome.includes(" ") == false) {
            return "Nome incompleto. Por favor insira seu nome e sobrenome"
        }
    }
    function obterSobrenome() {
        const sobrenome = nome.split(" ");
        return sobrenome[sobrenome.length - 1].toLowerCase();
    }
    function vogais(){
        let letras = nome.match(/[aeiou]/g)
        let total = letras ? letras.length : 0 
        return total.toString().padStart(2,"0")
    }
    const nomevalido = validarNome(nome)
    if (nomevalido != nome.includes(" ")){
        resp.innerText = validarNome()
        return
    } else {
        resp.innerText = `Senha Inicial: ${obterSobrenome()}`+`${vogais(nome)}`
    }
    function validarNome(nome) {
    return nome.match(/ /g) != null
    }
})