const frm = document.querySelector("form")
const tbody = document.querySelector("tbody")
let lsItem = []
let filtro = localStorage.getItem('filtro') == null ? "" : localStorage.getItem('filtro')

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const nome = frm.inNome.value
    const status = frm.inStatus.value
    const Eprevisao = frm.inPrevisao.value
    const inicio = frm.inInicio.value
    const fim = frm.inFim.value
    const Sprevisao = frm.inSaida.value
    const index = frm.inIndex.value
    // incluir ou atualizar
    index == "" ? lsItem.push({ nome, status, Eprevisao, inicio, fim, Sprevisao }) : lsItem[index] = { nome, status, Eprevisao, inicio, fim, Sprevisao }
    atualizarTabela()
})

function prepararEdicao(index) {
    frm.inNome.value = lsItem[index].nome
    frm.inStatus.value = lsItem[index].status
    frm.inPrevisao.value = lsItem[index].Eprevisao
    frm.inInicio.value = lsItem[index].inicio
    frm.inFim.value = lsItem[index].fim
    frm.inSaida.value = lsItem[index].Sprevisao      
    frm.btApagar.disabled = false
}

frm.btApagar.addEventListener("click", () => {
    const index = frm.inIndex.value
    if (window.confirm("Deseja excluir essa tarefa?") == false) {
        return
    }
    lsItem.splice(index, 1)
    atualizarTabela()
})

const cores = {
    "Em fila": "bg-secondary-subtle",
    "Iniciado": "bg-primary-subtle",
    "Concluído": "bg-danger-subtle"
}

// function atualizarTabela() {
//     limpar()
//     localStorage.setItem("lsItem", JSON.stringify(lsItem))
//     tbody.innerHTML = ""
//     let cont = 0
//     for (i of lsItem) {
//         if (filtro == "" || filtro.includes(i.status)) {
//             tbody.innerHTML += `<tr onclick='prepararEdicao(${cont})'>
//                 <td>${i.item}</td>
//                 <td class="${cores[i.status]}">${i.status}</td>
//                 </tr>`
//             cont++
//         }
//     }
// }
function limpar() {
    frm.inNome.value = ""
    frm.inStatus.value = ""
    frm.inPrevisao.value = ""
    frm.inInicio.value = ""
    frm.inFim.value = ""
    frm.inSaida.value = ""
    frm.btApagar.disabled = true
}

if (localStorage.getItem("lsItem") != null) {
    lsItem = JSON.parse(localStorage.getItem("lsItem"))
    atualizarTabela()
}

const lsFiltro = frm.querySelectorAll('input[type="checkbox"]')
for (const bt of lsFiltro) {
    bt.addEventListener("click", filtrar)
    if (filtro.includes(bt.value)) {
        bt.checked = true
    }

    function filtrar() {
        filtro = ""
        for (const bt of lsFiltro) {
            filtro += bt.checked ? bt.value + ",  " : ''
        }
        atualizarTabela()
        localStorage.setItem("filtro", filtro)
    }
}
