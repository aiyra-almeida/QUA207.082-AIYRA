const frm = document.querySelector('form')
const resp1 = document.querySelector('#outResp1')
const resp2 = document.querySelector('#outResp2')
const resp3 = document.querySelector('#outResp3')

frm.addEventListener("submit", (e)=>{
    e.preventDefault()
    // obter o cancelamento do formulário
    const modelo = frm.inModelo.value
    const ano = Number(frm.inAno.value)
    const preco = Number(frm.inPreco.value)
    // chamar a function classificaVeiculo w salvar variável classificadora
    const classificacao = classificarVeiculo(ano)
    // chamar a function calcularEntrada e salvar na variáel entrada
    const entrada = calcularEntrada(preco, classificacao)
    const parcela = (preco - entrada)/10
    // exibir respostas
    resp1.innerText = modelo+" - "+classificacao
    resp2.innerText = `Entrada R$: ${entrada.toFixed(2)}`
    resp3.innerText = `Entrada R$: ${parcela.toFixed(2)}`
})
// desenvolver a function classificaVeiculo
function classificarVeiculo(ano){
    const anoAtual1 = new Date().getFullYear()
    if(ano == anoAtual1){
        return "Novo"
    }else if(ano >= Number(anoAtual1)-2){
        return "Seminovo"
    }else{
        return "Usado"
    }
}
// desenvolver a  function calcularEntrada 
const calcularEntrada = (preco,classificacao) =>{
    if(classificacao == "Novo"){
        return preco * 0.5
    }else{
        return preco * 0.3
    }
}