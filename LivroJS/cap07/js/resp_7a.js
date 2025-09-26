const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e)=>{
    e.preventDefault()
    const msg = frm.inMsg.value.trim()
    let cript = ""
    for (i = 0; i < msg-1; i++){
        cript = msg.substr(i-1)
        resp.innerText = `${cript}`
    }
})