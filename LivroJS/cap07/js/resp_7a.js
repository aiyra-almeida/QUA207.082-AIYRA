// O programa deve ler uma mensagem e, em seguida, exibi-la criptografada. A criptografia consiste em: 
// a) exibir todas as letras das posições pares da mensagem; b) exibir todas as letras das
// posições ímpares da mensagem.

const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e)=> {
    e.preventDefault()
    const msg = frm.inMsg.value.trim()
    let cript = ""
    for (let i = 1; i < msg.length; i = i+2){
        cript += msg.charAt(i)
        }
    for (let i = 0; i < msg.length; i = i+2){
        cript += msg.charAt(i)
        }

    resp.innerText = cript
    
    // let cript1 = ""
    // let cript2 = ""
    // for (let i = 0; i < msg.length; i++){
    //     if (i%2 === 0){
    //         cript2 += msg[i];
    //     }else{
    //     cript1 += msg[i];
    //     }
    // }
    // resp.innerText = cript1 + cript2
})

frm.btDekript.addEventListener("click", ()=> {
    // opepreaocmr acld
    // compre parcelado
    const cript = frm.inMsg.value
    // array para gravar a msg descript
    const msg = []
    //metade da palavra
    let temp = cript.substr(0, cript.length/2)
    //variável auxiliar para somar os impares
    let aux = 1
    // loop para percorrer somente os ímpares
    for (let i = 0; i < temp.length; i++){
        // colocar na posição impar
        msg[aux] = temp.charAt(i)
        // incremento do proximo número ímpar
        aux += 2
    }

    // segunda metade palavra
    temp = cript.substr(cript.length/2)
    //variável auxiliar para somar os impares
    aux = 0
    // loop para percorrer somente os ímpares
    for (let i = 0; i < temp.length; i++){
        // colocar na posição impar
        msg[aux] = temp.charAt(i)
        // incremento do proximo número ímpar
        aux += 2
    }
    // escrever msg descriptografada  
    resp.innerText = msg.join("")
})