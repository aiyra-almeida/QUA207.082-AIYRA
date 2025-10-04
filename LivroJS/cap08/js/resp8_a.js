const frm = document.querySelector("form")
const resp = document.querySelector("pre")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const nome = frm.inNome.value
    const idade = Number(frm.inIdade.value)
    function retornarTracos() {
        return nome.replace(/[^ ]/g,"-")
    }
    function categorizarAluno() {
        if (idade <= 12) {
            return "Infantil"
        } else if (idade <= 18) {
            return "Juvenil"
        } else {
            return "Adulto"
        }
    }
    resp.innerText = `${nome}\n${retornarTracos()}\nCategoria: ${categorizarAluno()}`
})