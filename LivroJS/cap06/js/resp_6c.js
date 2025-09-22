const frm = document.querySelector('form')
const resp = document.querySelector('pre')
const candidatos = [] // declara candidato vetor global
// incluir alguns candidatos fixos
candidatos.push({ nome: "Sandro", nota: 32 })
candidatos.push({ nome: "Celina", nota: 19 })
candidatos.push({ nome: "Paulo", nota: 26 })
candidatos.push({ nome: "Fiuka", nota: 12 })
candidatos.push({ nome: "Fieza", nota: 23 })
candidatos.push({ nome: "Júlio", nota: 24 })
candidatos.push({ nome: "Kilderi", nota: 35 })
candidatos.push({ nome: "Arthur", nota: 31 })

frm.btListar.addEventListener("click", () => {
    if (candidatos.length == 0) {
        alert("Não há candidatos na lista")
        return
    }
    // metodo reduce() concatena uma string, obtendo modelo e nota de cada candidato
    const lista = candidatos.reduce((acumulador, candidato) =>
        acumulador + candidato.nome + ` - ${candidato.nota} acertos \n`, "")
    resp.innerText = `Lista de candidatos cadastrados\n${"-".repeat(40)}\n${lista}`
})
// disparar o evento de click em btListar (equivale ao click no botão)
frm.btListar.dispatchEvent(new Event("click"))

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const nome = frm.inNome.value
    const nota = Number(frm.inNota.value)
    candidatos.push({ nome, nota }) // adicionar dados ao vetor de objetos
    //limpar os candidatos do form
    frm.inNome.value = ""
    frm.inNota.value = ""
    frm.inNome.focus()
    //atualizar a lista de candidatos na tela
    frm.btListar.dispatchEvent(new Event("click"))
})

frm.btFiltrar.addEventListener("click", () => {

    const minimo = Number(prompt("Número de acertos para aprovação"))
    // se não informou o valor ou valor máximo
    if (minimo == 0 || isNaN(minimo)) {
        return
    }
    // filter cria um novo vetor que atende a condição de filtro
    const candidatosFiltro = candidatos
    .filter(candidato => candidato.nota >= minimo)
    .sort((a,b) => Number(b.nota) - Number(a.nota))
    if (candidatosFiltro.length == 0) {
        alert("Não há candidatos com nota inferior ou igual ao solicitado")
        return
    }
    let lista = ""
    for (const candidato of candidatosFiltro) {
        lista += `${candidato.nome} - ${candidato.nota} acertos \n`
    }
    resp.innerText = `Candidatos com nota a partir de: ${minimo} acertos\n`
    resp.innerText += "*".repeat(50) + "\n"
    resp.innerText += lista
})
