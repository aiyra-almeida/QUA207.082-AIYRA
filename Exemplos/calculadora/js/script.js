// função para adicionar um valor
function adicionar(valor){
    document.querySelector("#visor").value += valor
}
// função para limpar o vistor
function limpar(){
    document.querySelector("#visor").value = ""
}
// função para apagar o ultimo caracter
function apagar(){
   const visor = document.querySelector("#visor")
   visor.value = visor.value.slice(0,-1)
} 
// função para calcular resultado
function calcular(){
    const visor = document.querySelector("#visor")
    try {
        // usar a function eval() para calcular o resultado
        visor.value = eval(visor.value)
    } catch (error) {
        visor.value = "Error"
    }
}
function porcentagem(){
    calcular()
    const visor = document.querySelector("#visor")
    visor.value = Number(visor.value)/100
}

const botoes = document.querySelectorAll("button")
for (const botao of botoes){
    botao.addEventListener("click", () => {
        switch (botao.innerText) {
            case "C":
                limpar()
                break;
            case "←":
                apagar()
                break;
            case "%":
                porcentagem()
                break;
            case "=":
                calcular()
                break;
            default:
                adicionar(botao.innerText)
                break;
        }
    })
}