const frm = document.querySelector("form")
// constante multa por atraso
const TAXA_MULTA = 2/100
// constante juros por dia de atraso
const TAXA_JUROS = 0.33/100

// const resp1 = document.querySelector("#outMulta")
// const resp2 = document.querySelector("#outJuros")
// const resp3 = document.querySelector("#outTotal")

frm.addEventListener("submit",(e)=>{
    e.preventDefault()
    // obter a data de vencimento
    const dtVencimento = frm.inVenc.value
    // obter o valor da conta
    const valor = Number(frm.inValor.value)
    // criar a variável da data atual
    const hoje = new Date()    
    // criar objeto da data de vencimento tipo Date()
    const vencimento = new Date()    
    // preencher o objeto data de vencimento com os valores da data
    // data no formato [aaaa-mm-dd]
    const parte = dtVencimento.split("-")
    vencimento.setDate(Number(parte[2]))
    vencimento.setMonth(Number(parte[1])-1)
    vencimento.setFullYear(Number(parte[0]))
    // calcular a diferença entre datas (milissegundos)
    const atraso = hoje - vencimento
    // inicializar multa e juros com 0
    let multa = 0
    let juros = 0
    // se conta estiver em atraso fazer os calculos necessários
    if (atraso > 0){
        // converter ms do atraso em dias (24h*60m*60s*1000ms = 86.400.000)
        const dias = atraso/ 86400000
        // calcular multa
        multa = valor * TAXA_MULTA
        // calcular juros
        juros = valor * TAXA_JUROS * dias
    }
    // caluclar total
    const total = valor + multa + juros
    // exibir valores
    frm.outMulta.value = multa.toFixed(2)
    frm.outJuros.value = juros.toFixed(2)
    frm.outTotal.value = total.toFixed(2)
})