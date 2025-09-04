const frm = document.querySelector('form')
const resp = document. querySelector('outResp1')

frm.addEventListener('submit', (e)=>{
    const numero =  Number(frm.inNum.value)
    const resp = Number(numero % 2)

    let num 
    if(resp == 0){
        num = `Par`
    } else {
        num = `Impar`
    }
})

resp.innerText=(`É ${num}!`)