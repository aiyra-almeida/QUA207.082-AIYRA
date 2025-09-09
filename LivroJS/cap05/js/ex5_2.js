const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e)=> {
    e.preventDefault()
    let resposta = ""
    const num = Number(frm.inNumero.value)

    for (let i= num; i >= 2; i--){
        resposta += i + `,`
    }
    resp.innerText = `Entre ${num} e 1: ${resposta}1.`
})