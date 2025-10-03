const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")
const resp3 = document.querySelector("#outResp3")

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
    resp1.innerText = `${nome}`
    resp2.innerText = retornarTracos()
    resp3.innerText = categorizarAluno()
})