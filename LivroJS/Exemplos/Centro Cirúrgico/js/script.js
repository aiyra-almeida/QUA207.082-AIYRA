const frm = document.querySelector("form")
const tbody = document.querySelector("tbody")
let lsItem = []


// if (localStorage.getItem("lsItem") != null) {
//     lsItem = JSON.parse(localStorage.getItem("lsItem"))
//     atualizarTabela()
// }

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const item = frm.inNome.value
    const status = frm.inStatus.value
    const local = frm.inLocal.value
    const Eprevisao = frm.inPrevisao.value
    const inicio = frm.inInicio.value
    const fim = frm.inFim.value
    const Sprevisao = frm.inSaida.value

    const index = frm.inIndex.value
    index == "" ? lsItem.push({ item, status, local, Eprevisao, inicio, fim, Sprevisao }) : lsItem[index] = { item, status, local, Eprevisao, inicio, fim, Sprevisao }
    // incluir ou atualizar
    atualizarTabela()

})

function prepararEdicao(index) {
    frm.inNome.value = lsItem[index].item
    frm.inStatus.value = lsItem[index].status

    frm.inLocal.value = lsItem[index].local
    frm.inPrevisao.value = lsItem[index].Eprevisao
    frm.inInicio.value = lsItem[index].inicio
    frm.inFim.value = lsItem[index].fim
    frm.inSaida.value = lsItem[index].Sprevisao

    frm.inIndex.value = index
    frm.btApagar.disabled = false
}

frm.btApagar.addEventListener("click", () => {
    const index = frm.inIndex.value
    if (index === "") {
        if(index == ""){
        alert("Necessário selecionar 1 item.")
        return
    }

    if(confirm("Deseja realmente apagar esse item?") == false){
        return
    }
        lsItem.splice(index, 1)
        atualizarTabela()
    }
})

const coresStatus = {
  "Pré-Operatório": "#fcfc2eff",
  "Em recuperação": "#71ea0fff",
  "Transferido": "#27ccf1ff"
}

function atualizarTabela() {
    limpar()
    localStorage.setItem("lsItem", JSON.stringify(lsItem))
    tbody.innerHTML = ""
   let cont = 0
    for (i of lsItem) {
          const cor = coresStatus[i.status];
            tbody.innerHTML += `<tr onclick='prepararEdicao(${cont})'>
            <td>${i.item}</td>
            <td style="background-color:${cor}">${i.status} (${i.local})</td>            
            <td>${i.Eprevisao}</td>
            <td>${i.inicio}</td>
            <td>${i.fim}</td>
            <td>${i.Sprevisao}</td>
            </tr>`
        cont++
    }
    
}
frm.btApagar.addEventListener("click", () =>{
    const index = frm.inIndex.value
    if(index == ""){
        alert("Necessário selecionar 1 item.")
        return
    }
    if(confirm("Deseja realmente apagar esse item?") == false){
        return
    }
    lsItem.splice(index,1)
    atualizarTabela()        
})

function limpar() {
    frm.inNome.value = ""  
    frm.inStatus.value = ""
    frm.inLocal.value = ""
    frm.inPrevisao.value = "" 
    frm.inInicio.value = ""
    frm.inFim.value = ""  
    frm.inSaida.value = ""
    frm.inIndex.value = ""
    frm.inNome.focus()
    frm.btApagar.disabled = true
}

// Salva os dados no localStorage

if (localStorage.getItem("lsItem") != null) {
    lsItem = JSON.parse(localStorage.getItem("lsItem"))
    atualizarTabela()
}
