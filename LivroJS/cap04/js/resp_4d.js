const frm = document.querySelector('form')
const resp = document.querySelector('h3')

frm.addEventListener('submit', (e)=>{
    e.preventDefault()

    const A = Number(frm.inA.value)
    const B = Number(frm.inB.value)
    const C = Number(frm.inC.value)

    if(A > B+C || B > C+A || C > A+B){
        h3.innerText = "Não pode ser um Triângulo"
    }

    if(A==B && B==C){}
})