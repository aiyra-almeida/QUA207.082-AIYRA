// O programa deve ler uma mensagem e, em seguida, exibi-la criptografada. A criptografia consiste em: 
// a) exibir todas as letras das posições pares da mensagem; b) exibir todas as letras das
// posições ímpares da mensagem.

const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e)=> {
    e.preventDefault()
    const msg = frm.inMsg.value.trim()
    let cript1 = ""
    let cript2 = ""
    for (let i = 0; i < msg.length; i++){
        if (i%2 === 0){
            cript2 += msg[i];
        }else{
        cript1 += msg[i];
        }
    }
    resp.innerText = cript1 + cript2
})

frm.btDekript.addEventListener("click", ()=> {
    const msg = frm.inMsg.value.trim()
    resp.innerText = `${msg}`

})