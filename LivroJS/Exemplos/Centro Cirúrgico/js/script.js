const frm = document.querySelector("form")
const tbody = document.querySelector("tbody")
let lsItem = []
let filtro = localStorage.getItem('filtro') == null ? "" : localStorage.getItem('filtro')

if (localStorage.getItem("lsItem") != null) {
    lsItem = JSON.parse(localStorage.getItem("lsItem"))
    atualizarTabela()
}

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const nome = frm.inNome.value
    const status = frm.inStatus.value
    const Eprevisao = frm.inPrevisao.value
    const inicio = frm.inInicio.value
    const fim = frm.inFim.value
    const Sprevisao = frm.inSaida.value
    const index = frm.inIndex.value
    const paciente = {nome, status, Eprevisao, inicio, fim, Sprevisao}
    // incluir ou atualizar
    // Novo ou edição

    if (index === "") {
        lsItem.push(paciente)
    } else {
        lsItem[index] = paciente
    }
    salvar()
    // index == "" ? lsItem.push({ nome, status, Eprevisao, inicio, fim, Sprevisao }) : lsItem[index] = { nome, status, Eprevisao, inicio, fim, Sprevisao }
    atualizarTabela()
    limpar()
})

function prepararEdicao(index) {
    const paciente = lsItem[index]
    frm.inNome.value= paciente.nome
    frm.inStatus.value= paciente.status
    frm.inPrevisao.value= paciente.Eprevisao
    frm.inInicio.value= paciente.inicio
    frm.inFim.value= paciente.fim
    frm.inSaida.value= paciente.Sprevisao
    frm.inIndex.value= index
    frm.btApagar.disabled = false
}

frm.btApagar.addEventListener("click", () => {
    const index = frm.inIndex.value
        if (index === "") return
        if (confirm("Deseja apagar este paciente?")) {
        lsItem.splice(index, 1)
        salvar()
        atualizarTabela()
        limpar()
}
})

// const cores = {
//     "Em fila": "bg-secondary-subtle",
//     "Iniciado": "bg-primary-subtle",
//     "Concluído": "bg-danger-subtle"
// }

function atualizarTabela() {
    limpar()
    localStorage.setItem("lsItem", JSON.stringify(lsItem))
    tbody.innerHTML = ""
     if (lsItem.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" class="text-center">Nenhum paciente cadastrado</td></tr>`
        return }
        lsItem.forEach((paciente, index) => {
        const tr = document.createElement("tr")
        tr.innerHTML = `
            <td>${paciente.nome}</td>
            <td>${paciente.status}</td>
            <td>${paciente.Eprevisao || '-'}</td>
            <td>${paciente.inicio || '-'}</td>
            <td>${paciente.fim || '-'}</td>
            <td>${paciente.Sprevisao || '-'}</td>`
        tr.addEventListener("click", () => prepararEdicao(index))
        tbody.appendChild(tr)
    })
}
    
function limpar() {
    frm.reset()
    frm.inIndex.value=""
    frm.btApagar.disabled = true
}

// Salva os dados no localStorage

function salvar() {

    localStorage.setItem("lsItem", JSON.stringify(lsItem))

}
// if (localStorage.getItem("lsItem") != null) {
//     lsItem = JSON.parse(localStorage.getItem("lsItem"))
//     atualizarTabela()
// }

// const lsFiltro = frm.querySelectorAll('input[type="checkbox"]')
// for (const bt of lsFiltro) {
//     bt.addEventListener("click", filtrar)
//     if (filtro.includes(bt.value)) {
//         bt.checked = true
//     }

//     function filtrar() {
//         filtro = ""
//         for (const bt of lsFiltro) {
//             filtro += bt.checked ? bt.value + ",":""
//         }
//         atualizarTabela()
//         localStorage.setItem("filtro", filtro)
//     }
// }
