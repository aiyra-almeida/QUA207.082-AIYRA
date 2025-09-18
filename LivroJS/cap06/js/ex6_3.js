const frm = document.querySelector('form')
const resp = document.querySelector('pre')
const carros = [] // declara carro vetor global
// incluir alguns carros fixos
carros.push({ modelo: "Sandero 2014", preco: 32900 })
carros.push({ modelo: "Celta 2011", preco: 19500 })
carros.push({ modelo: "Palio 2012", preco: 26800 })
carros.push({ modelo: "Fusca 1994", preco: 12500 })
carros.push({ modelo: "Fiesta 2010", preco: 23000 })
carros.push({ modelo: "Gol 2009", preco: 24300 })
carros.push({ modelo: "Kwid 2018", preco: 35700 })
carros.push({ modelo: "Astra 2011", preco: 31500 })

frm.btListar.addEventListener("click", () => {
    if (carros.length == 0) {
        alert("Não há carros na lista")
        return
    }
    // metodo reduce() concatena uma string, obtendo modelo e preço de cada carro
    const lista = carros.reduce((acumulador, carro) =>
        acumulador + carro.modelo + ` - R$ ${carro.preco.toFixed(2)}\n`, "")
    resp.innerText = `Lista de carros cadastrados\n${"-".repeat(40)}\n${lista}`
})
// disparar o evento de click em btListar (equivale ao click no botão)
frm.btListar.dispatchEvent(new Event("click"))

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const modelo = frm.inModelo.value
    const preco = Number(frm.inPreco.value)
    carros.push({ modelo, preco }) // adicionar dados ao vetor de objetos
    //limpar os carros do form
    frm.inModelo.value = ""
    frm.inPreco.value = ""
    frm.inModelo.focus()
    //atualizar a lista de carros na tela
    frm.btListar.dispatchEvent(new Event("click"))
})

frm.btFiltrar.addEventListener("click", () => {

    const maximo = Number(prompt("Qual o valor máximo que o cliente deseja pagar?"))
    // se não informou o valor ou valor máximo
    if (maximo == 0 || isNaN(maximo)) {
        return
    }
    // filter cria um novo vetor que atende a condição de filtro
    const carrosFiltro = carros.filter(carro => carro.preco <= maximo)
    if (carrosFiltro.length == 0) {
        alert("Não há carros com preço inferior ou igual ao solicitado")
        return
    }
    let lista = ""
    for (const carro of carrosFiltro) {
        lista += `${carro.modelo} - R$: ${carro.preco.toFixed(2)}\n`
    }
    resp.innerText = `Carros de até R$: ${maximo.toFixed(2)}\n`
    resp.innerText += "*".repeat(40) + "\n"
    resp.innerText += lista
})

frm.btSimular.addEventListener("click",()=>{
    const desconto = Number(prompt("Qual o percentual de desconto"))
    if(desconto == 0 || isNaN(desconto)){
        return
    }
    const carrosDesc = carros.map(aux =>({
        modelo:aux.modelo,
        preco: aux.preco - (aux.preco * desconto/100)
    }))
    let lista = ""
    for(const carro of carrosDesc){
        lista += `${carro.modelo} - R$: ${carro.preco.toFixed(2)}\n`
    }
    resp.innerText = `Carros de desconto R$: ${desconto}%\n`
    resp.innerText += "$".repeat(40)+"\n"
    resp.innerText += lista
})