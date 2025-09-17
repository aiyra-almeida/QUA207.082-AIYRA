const frm = document.querySelector("form")
const respErros = document.querySelector("#outErros")
const respChances = document.querySelector("#outChances")
const respDica = document.querySelector("#outDica")

const erros = [] // vetor de escopo global com números já apostados
const sorteado = Math.floor(Math.random()*100)+1 // numero aleatório entere 1 e 100
const CHANCES = 6 // constante com o numero maximos de chances

frm.addEventListener("submit", (e)=>{
    e.preventDefault()
    const numero = Number(frm.inNum.value)
        if (numero == sorteado){
            respDica.innerText = `Parabéns!! Número sorteado: ${sorteado}`
            frm.btSub.disabled = true // troca o status dos botões
            frm.btNovo.className = "exibe"
        } else {
            if (erros.includes(numero)) { // se o número exista no vetor erros
                alert(`Você já apostou nesse número ${numero}. Tente outro`)
            }else{
                erros.push(numero) // adiciona o número ao vetor
                const numErros = erros.length // obtemo tamanho do vetor
                const numChances = CHANCES - numErros // calcula o numero de chances
                //exibe o numero de erros , conteúdo do vetor e numero de chances
                respErros.innerText = `${numErros} (${erros.join(",")})`
                if (numChances == 0){
                  alert("Suas chances acabaram!")
                  frm.btSub.disabled = true
                  frm.btNovo.className = "exibe"
                  respDica.innerText = `Game Over!! Número sorteado foi ${sorteado}`
                
                }else{
                // usa operador ternário para mensagem da dica
                const dica = numero < sorteado ? "maior" : "menor" 
                respDica.innerText = `Dica: Tente um número ${dica} que ${numero}`
                }
            }
        }
        frm.inNum.value = ""
        frm.inNum.focus()
    })
frm.btNovo.addEventListener("click", ()=>{
    location.reload() // fazer um refresh da pagina e zerar valores
})