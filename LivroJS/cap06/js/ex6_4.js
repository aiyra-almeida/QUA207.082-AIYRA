const frm = document.querySelector('form')
const resp = document.querySelector('pre')
const criancas = [] // declara um vetor global

// incluindo crianças fixas 

criancas.push({nome:"Lucas", idade:4})
criancas.push({nome:"Ana", idade:3})
criancas.push({nome:"Bianca", idade:6})
criancas.push({nome:"Pedro", idade:6})
criancas.push({nome:"João", idade:4})
criancas.push({nome:"Maria", idade:4})
criancas.push({nome:"Juliana", idade:3})
criancas.push({nome:"João", idade:6})

frm.btListar.addEventListener("click", () => {
    if (criancas.length == 0) {
        alert("Não há criancas na lista")
        return
    }
    // metodo reduce() concatena uma string, obtendo nome e idade de cada criança
    const lista = criancas.reduce((acumulador,crianca) =>
        acumulador + crianca.nome + ` ${crianca.idade}\n`, "")
    resp.innerText = `Lista de criancas cadastradas\n${"-".repeat(40)}\n${lista}`
})
// disparar o evento de click em btListar (equivale ao click no botão)
frm.btListar.dispatchEvent(new Event("click"))

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const nome = frm.inNome.value
    const idade = Number(frm.inIdade.value)
    criancas.push({nome,idade}) // adicionar dados ao vetor de objetos
    //limpar os campos do form
    frm.inNome.value = ""
    frm.inIdade.value = ""
    frm.inNome.focus()
    //atualizar a lista de criança na tela
    frm.btListar.dispatchEvent(new Event("click"))
})
frm.btResumir.addEventListener("click", ()=>{
    // verificar se a lista está zerado
    if(criancas == 0) {
        alert(`Não há crianças na lista!`)
        return
    }
    // criar a cópia do vetor criança
    const copia = [...criancas]
    // ordernar pela idade
    copia.sort((a,b) => a.idade - b.idade)
    // criar uma variável ppar concatenar o retorno
    let resumo = ""
    // salvar a menor idade do vetor
    let aux = copia[0].idade
    // criar um vetor para gravar a lista de nomes por idade
    let nomes = []
    // iniciar um loop para percorrer o vetor de cópia
    for(const crianca of copia){
        const {nome, idade} = crianca // desestruturação
        // verificar se a idade permanece igual
        if (aux == idade){            
        // se sim, incluir o nome criança
        nomes.push(nome)
        }else{
        // se não, resumo para cada idade
        resumo = atualizarResumo(resumo, aux, nomes, copia)
        // atualizar a idade aux
        aux = idade
        // limpar vetor nome
        nomes = []
        // adicionar o primeiro nome da nova idade
        nomes.push(nome)
        }
    }
        resumo = atualizarResumo(resumo, aux, nomes, copia)
        resp.innerText = resumo
})

function atualizarResumo(resumo, aux, nomes, copia){
        resumo += `${aux} ano(s): ${nomes.length} criança(s) - `
        resumo += ((nomes.length/copia.length)*100).toFixed(2)+"%\n"
        resumo +=`(${nomes.join(", ")})\n\n`
        return resumo
    }