const frm = document.querySelector('form')
const resp = document.querySelector('h3')

frm.addEventListener('submit', (e)=>{
    e.preventDefault()

    const A = Number(frm.inA.value)
    const B = Number(frm.inB.value)
    const C = Number(frm.inC.value)

    let tri

    if(A > B+C || B > C+A || C > A+B){
        resp.innerText = "Não pode ser um Triângulo"
        return
    }

    if(A==B && B==C){
        tri = "Equilátero"
    } else if ( A!=B && B!=C && A!=C){
        tri = "Escaleno"
    } else {
        tri = "Isóceles"
    }

resp.innerText= `${tri}`
})