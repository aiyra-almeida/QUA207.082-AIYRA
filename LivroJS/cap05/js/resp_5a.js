const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e)=> {
    e.preventDefault()

    const fruta = frm.inFruta.value
    const numero = Number(frm.inNum.value)
    let repeticao = ""

    for(let i = 1; i <= numero*2; i++){
        if(i%2 ==0){
            repeticao += " * "
        }else{
            repeticao += fruta
        }
    }
resp.innerText = repeticao
})