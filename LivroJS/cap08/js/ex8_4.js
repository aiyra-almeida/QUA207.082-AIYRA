const frm = document.querySelector("form")
const resp = document.querySelector("pre")

// vetor global prar armazenar os itens do pedido
const itens = []
//quando o radio button pizza é clicado
frm.rbPizza.addEventListener("click", ()=>{
    frm.inBebida.className = "oculta"
    frm.inPizza.className = "exibe"
})
// quando o radio button bebida é clicado
frm.rbBebida.addEventListener("click", ()=>{
    frm.inBebida.className = "exibe"
    frm.inPizza.className = "oculta"
})
// quando o campo detalhes receber o foco
frm.inDetalhes.addEventListener("focus", ()=>{
    // se o radio button pizza estiver marcado
    if(frm.rbPizza.checked){
    const pizza = frm.inPizza.value
    // o uso do operador ternário para indicar o número de sabores
    const num = (pizza == "media") ? 2 : (pizza == "grande") ? 3 : 4
    // atribuir placeholder e exibir uma dica do preenchimento
    frm.inDetalhes.placeholder = `Até ${num} sabores`
    }else{
        const bebida = frm.inBebida.value
        const sugestao = (bebida == "refri") ? "coca-cola, guaraná" :
        (bebida == "suco") ? "Limão, Maracujá, Laranja, Tamarindo" : "copo, Jarra"
        frm.inDetalhes.placeholder = sugestao
    }
})
// limpar os detalhes quando o campo perder o foco
frm.inDetalhes.addEventListener("blur", ()=>{
    frm.inDetalhes.placeholder = ""
})

//------------------////------------------////------------------////------------------//
// frm.inDetalhes.addEventListener("focus", ()=>{
//     // se o radio button bebida estiver marcado
//     if(frm.rbBebida.checked){
//     const bebida = frm.inBebida.value
//     // o uso do operador ternário para indicar o número de sabores
//     const num = (bebida == "Água") ? 2 : (bebida == "Refrigerante") ? 3 : 4
//     // atribuir placeholder e exibir uma dica do preenchimento
//     frm.inDetalhes.placeholder = `Até ${num} bebidas`
//     }
// })

// limpar os detalhes quando o campo perder o foco
frm.inDetalhes.addEventListener("blur", ()=>{
    frm.inDetalhes.placeholder = ""
})
//------------------////------------------////------------------////------------------//
frm.addEventListener("submit", (e)=>{
    e.preventDefault()
    let produto = ""
    if (frm.rbPizza.checked){
        //obter o numero do index selecionado
        const num = frm.inPizza.selectedIndex
        //obter po texto do item selecionado
        produto = frm.inPizza.options[num].text
    }else{
        //obter o numero do index do item selecionado
        const num = frm.inBebida.selectedIndex
        //obter o txt do item selecionado
        produto = frm.inBebida.options[num].text
    }
    // obter o texto informado no detalhes
    const detalhes = frm.inDetalhes.value
    //adicionar no vetor
    itens.push(produto+`(${detalhes})`)
    //exibir os itens do pedido
    resp.innerText = itens.join("\n")
    //limpar o campo 
    frm.reset()
    //disparar click no rbPizza
    frm.rbPizza.dispatchEvent(new Event("click"))
})